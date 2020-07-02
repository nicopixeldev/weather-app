import React from 'react'
import Moment from 'react-moment'

const Results = ({ results }) => (
    <section className="results">
        <section className="results__current">
            <header className="results__current__header">
                <h2>{results.city_name}</h2>
            </header>

            <div className="results__current__temperature">
                <div className="results__current__temperature__left">
                    <img src={`https://www.weatherbit.io/static/img/icons/${results.data[0].weather.icon}.png`} alt="weather city icon" />
                    <h1>{results.data[0].temp}<span>&deg;C</span></h1>
                </div>
            </div>
        </section>

        <section className="results__forecast">
            {results.data.map(({ datetime, weather: { icon }, app_max_temp, app_min_temp }, index) =>
                <section className="results__forecast__day" key={index}>
                    <Moment className="results__forecast__day__title" format="ddd">
                        {datetime}
                    </Moment>
                    <img src={`https://www.weatherbit.io/static/img/icons/${icon}.png`} alt="weather day" />
                    <p className="results__forecast__day__maxmin">{app_max_temp}<span>&deg;</span></p>
                    <p className="results__forecast__day__maxmin">{app_min_temp}<span>&deg;</span></p>
                </section>
            )}
        </section>
    </section>
)

export default Results
