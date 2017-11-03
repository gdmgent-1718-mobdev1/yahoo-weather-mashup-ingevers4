function App() {
    let _weatherService,
        _weatherElement,
        _currentWeatherData;

    function init() {
        console.log('1 Initialize the application');
        console.log('1.1 Create a weatherService object');
        _weatherService = new WeatherService();
        console.log('1.2 Chache the active DOM-elements');
        _weatherElement = document.querySelector('.weather-container');
        console.log('1.3 Load the weather via _weatherService object');
        loadWeatherData();
    }

    function loadWeatherData() {
        //het object _weatherService wordt samengevoegd met de JSON die de twee samenvoegt: loadWeather()
        _weatherService.loadWeather()

        .then(function(data) {
            console.log('2.1 Save the loaded data in _currentWeatherData');
            _currentWeatherData = data;
            console.log(data);
            console.log(_currentWeatherData);
            updateWeatherForeCastUI();
            
        })

        .catch(function(reject) {
            console.log('Failed');
        });

    }

    function updateWeatherForeCastUI() {
        let tempStr = '';
        console.log(_currentWeatherData);

        _currentWeatherData.query.results.channel.item.forecast.forEach(function(weather) {
            tempStr += `
            <div>${ weather.day }</div>
            <div>${ weather.date }</div>
            <div>${ weather.text }</div>
            <br>
            `;
        })
        _weatherElement.innerHTML = tempStr;
    }

        return {
            init: init
        }

};

// load event window object
// all resources are loaded
window.addEventListener('load', function(ev) {
    // Make new instance of app
    const app = new App();
    app.init();
});
