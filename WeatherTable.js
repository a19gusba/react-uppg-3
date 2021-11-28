function WeatherTable({ ort, climateCode, forecast }) {
    console.log(ort.geodata)

    return (
        <div className="weather-table">
            <div className="header-wrapper">
                <h1>{ort.name}</h1>
                <span>Country: {ort.country}, </span>
                <span>Postal code: {ort.postalcode}</span>
                <div>
                    <div className="bold">Geodata: </div>
                    <span>LATITUDE: {ort.geodata.LATITUDE}, LONGITUDE: {ort.geodata.LONGITUDE}, ALTITUDE: {ort.geodata.ALTITUDE}</span>
                </div>
                <div>
                    <span className="bold">Description: </span>
                    <span>{ort.about}</span>
                </div>
                <div className="climate-code-container">
                    <div className="climate-code-color" style={{ backgroundColor: climateCode.color }}></div>
                    {climateCode.code} - {climateCode.name}
                </div>
            </div>
            <div className="weather-days-container">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Period Number/Name</th>
                            <th>Start/Stop time</th>
                            <th>Temperature</th>
                            <th>Rain</th>
                            <th>Wind</th>
                        </tr>
                    </thead>
                    <tbody>
                        <WeatherTableBody forecast={forecast}></WeatherTableBody>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
