import React from 'react';
import './WeatherDetails.css';

interface WeatherDetailsProps {
    weatherName: string;
    tempMax: number;
    tempMin: number;
    humidity: number;
    cloudy: number;
    wind: number;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ weatherName, tempMax, tempMin, humidity, cloudy, wind }) => {
    return (
        <div className="weather-details">
            <div className="weather-details__name">{weatherName}</div>
            <div className="weather-details__row">
                <div className="weather-details__label">Temp max</div>
                <div className="weather-details__value">{tempMax}°C</div>
            </div>
            <div className="weather-details__row">
                <div className="weather-details__label">Temp min</div>
                <div className="weather-details__value">{tempMin}°C</div>
            </div>
            <div className="weather-details__row">
                <div className="weather-details__label">Humidity</div>
                <div className="weather-details__value">{humidity}%</div>
            </div>
            <div className="weather-details__row">
                <div className="weather-details__label">Cloudy</div>
                <div className="weather-details__value">{cloudy}%</div>
            </div>
            <div className="weather-details__row">
                <div className="weather-details__label">Wind</div>
                <div className="weather-details__value">{wind} km/h</div>
            </div>
        </div>
    );
};

export default WeatherDetails;
