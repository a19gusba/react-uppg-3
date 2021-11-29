function App({ ort, climateCode, forecast, comments }) {
  console.log(comments)
  function getChatData() {
    var data = { show: "show" }

    return data
  }

  function getClimateCodeData() {
    for (var e of climateCode) {
      if (e.code == ort[0].climatecode)
        return e
    }
  }

  return (
    <div>
      <div>
        <WeatherTable ort={ort[0]} climateCode={getClimateCodeData()} forecast={forecast}></WeatherTable>
        <ChatWindow data={comments}></ChatWindow>
      </div>
    </div>
  );
}

