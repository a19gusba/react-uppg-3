function WeatherDay({ data }) {

    const auxdata = JSON.parse(data.auxdata)
    function getForecastImage(FNAME) {

        if (FNAME == "Partly cloudy" || FNAME == "Fair")
            return "cloud-sun"
        else if (FNAME == "Rain Showers" || FNAME == "Heavy rain")
            return "rain"
        else if (FNAME == "Cloudy")
            return "cloud"
        else if (FNAME == "Thunder")
            return "thunder"
        else if (FNAME == "Fog")
            return "fog"
        else
            console.log(FNAME)
    }

    return (
        <tr className="weather-day-container">
            <td className="weather-type">
                <img src={"images/" + getForecastImage(auxdata.FNAME) + ".png"} alt="" className="weather-icon" />
            </td>
            <td>
                <div className="">{data.periodno}</div>
                <div className="">{data.periodname}</div>
            </td>
            <td>
                <div className="">{data.fromtime}</div>
                <div className="">{data.totime}</div>
            </td>
            <td className="weather-temperature">
                <div className="flex">
                    <img src="" alt="" className="temperature-icon" />
                    <div>
                        <div className="max-temperature bold">{auxdata.TVALUE}°</div>
                    </div>
                </div>
            </td>
            <td className="weather-rain">
                <div className="flex">
                    <img src="" alt="" className="rain-icon" />
                    <div className="bold">{auxdata.RVALUE} {auxdata.RUNIT}</div>
                </div>
            </td>
            <td className="weather-wind">
                <div className="flex">
                    <img src="" alt="" className="wind-icon" />
                    <div className="bold">{auxdata.MPS} m/s</div>
                </div>
            </td>
        </tr>
    )
}
