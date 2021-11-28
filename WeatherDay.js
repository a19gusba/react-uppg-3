function WeatherDay({ data }) {

    function getForecastImage(FNAME) {
        if (FNAME == "Partly cloudy")
            return "cloud-sun"
        else if (FNAME == "Rain Showers")
            return "rain"
        else if (FNAME == "Heavy rain")
            return "rain"
        else if (FNAME == "Cloudy")
            return "cloud"
    }

    return (
        <tr className="weather-day-container">
            <td className="weather-type">
                <img src={"images/" + getForecastImage(data.forecast.FNAME) + ".png"} alt="" className="weather-icon" />
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
                        <div className="max-temperature bold">{data.forecast.TVALUE}°</div>
                    </div>
                </div>
            </td>
            <td className="weather-rain">
                <div className="flex">
                    <img src="" alt="" className="rain-icon" />
                    <div className="bold">{data.forecast.RVALUE} {data.forecast.RUNIT}</div>
                </div>
            </td>
            <td className="weather-wind">
                <div className="flex">
                    <img src="" alt="" className="wind-icon" />
                    <div className="bold">{data.forecast.MPS} m/s</div>
                </div>
            </td>
        </tr>
    )
}
