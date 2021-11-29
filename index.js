var sqlite3 = require("sqlite3").verbose()

const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
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

/* == WEATHER == */

// Get forecast
app.get("/forecast/:ort/:days", function (req, res) {
    var paramDays = parseInt(req.params.days)
    let fromdate = new Date("2020-06-09")
    let todate = new Date("2020-06-09")
    todate.setDate(todate.getDate() + paramDays);

    fromdate = fromdate.toISOString().split('T')[0]
    todate = todate.toISOString().split('T')[0]

    let sql = `SELECT * FROM forecast where fromtime>='${fromdate}' AND totime<='${todate}' and name='${req.params.ort}'`
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

// Get climatecodes
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

// Get ort
app.get("/ort/:ort", function (req, res) {
    let sql = `SELECT * FROM info where name='${req.params.ort}'`
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


/* == CHAT == */

// Get comments
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


/* == USER == */

// Get users
app.get("/user", function (req, res) {
    let sql = `SELECT * FROM 'user'`
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

// Add a user
app.get("/user/:id/:username/:email/:favlocation", function (req, res) {

    let sql = `INSERT INTO user VALUES (${req.params.id}, '${req.params.username}', '${req.params.email}', '${req.params.favlocation}', null);`
    db.run(sql)
})
