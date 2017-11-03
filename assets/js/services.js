function WeatherService() {
    const URL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D12591774%20AND%20u%3D%22c%22&format=json&diagnostics=true';

    function loadWeather() {
        return AJAX.loadJsonByPromise(URL);
    }

    return {
        loadWeather : loadWeather
    }
};
