import React from 'react';
import './WeatherForecast.css';

interface Forecast {
    hour: string;
    tempMax: number;
    tempMin: number;
    weatherDescription: string;
}

interface WeatherForecastProps {
    forecast: Forecast[];
}

const WeatherForecast: React.FC<WeatherForecastProps> = ({ forecast }) => {
    return (
        <div className="weather-forecast">
            <h2 className="weather-forecast__title">Today's Hourly Forecast</h2>
            <div className="weather-forecast__list">
                {forecast.map((item, index) => (
                    <div key={index} className="weather-forecast__item">
                        <div className="weather-forecast__left">
                            <div className="weather-forecast__hour">{item.hour}</div>
                            <div className="weather-forecast__description">{item.weatherDescription}</div>
                        </div>
                        <div className="weather-forecast__temp">
                            <span className="weather-forecast__temp-max">{item.tempMax}°C</span>
                            <span className="weather-forecast__temp-separator"> / </span>
                            <span className="weather-forecast__temp-min">{item.tempMin}°C</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherForecast;
