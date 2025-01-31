const { REACT_APP_API_HOST, API_KEY } = process.env;

const logic = {
  /**
   * Returns the 7 days forecast for weather in cityName
   *
   * @param {String} cityName
   * @returns {Promise} - Reolved with object: https://www.weatherbit.io/api/weather-forecast-16-day
   * @throws {TypeError} - on non valid input values
   */
  getWeatherByCityName(cityName) {
    if (typeof cityName !== "string")
      throw TypeError(`${cityName} is not a string`);
    if (!cityName.trim().length) throw Error("city name can not be empty");

    return fetch(
      `${REACT_APP_API_HOST}/forecast/daily?key=${API_KEY}&city=${cityName}&days=7`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.error) throw Error(response.error);
        return response;
      });
  },
};

export default logic;
