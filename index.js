var sqlite3 = require("sqlite3").verbose()

const express = require("express")

const app = express()


app.get("/", function (req, res) {
    res.send("Connected to server")
})

app.listen(5000, function () {

})

let db = new sqlite3.Database("./weather.db", (err) => {
    if (err) {
        console.log(err.message)
    }
    else {
        console.log("Connected to db")
    }
})


app.get("/forecast/:ort/:days", function (req, res) {
    let fromdate = new Date("2020-06-09")
    let todate = new Date("2020-06-09")
    todate.setDate(todate.getDate() + req.params.days)
    fromdate = fromdate.toISOString().split('T')[0]
    todate = todate.toISOString().split('T')[0]

    /* let sql = `SELECT * FROM forecast where fromtime>=${fromdate} AND totime<=${todate} and name='${req.params.ort}'` */
    let sql = `SELECT * FROM forecast where name='${req.params.ort}'`
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err
        }
        else {
            res.type("application/json")
            res.status(200).send(rows)
        }
    })
})

app.get("/climatecodes", function (req, res) {
    let sql = `SELECT * FROM 'climatecodes'`
    db.all(sql, [], (err, row) => {
        if (err) {
            throw err
        }
        else {
            res.type("application/json")
            res.status(200).send(row)
        }
    })
})

app.get("/comments/:ort", function (req, res) {
    let sql = `SELECT *,comment.id as commentid,count(likes.comment) as nolikes FROM comment,user left outer join likes on likes.comment=comment.id where location='${req.params.ort}' and user.id=comment.author group by comment.id`
    db.all(sql, [], (err, row) => {
        if (err) {
            throw err
        }
        else {
            res.type("application/json")
            res.status(200).send(row)
        }
    })
})
