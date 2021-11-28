
//import { v4 as uuidv4 } from 'uuid';

function WeatherTableBody({ forecast }) {
    var i = 0
    return (
        forecast.map(data => {
            i++
            return <WeatherDay key={1/* uuidv4() */} data={data}></WeatherDay>
        })
    )
}
