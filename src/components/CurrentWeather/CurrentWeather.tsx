import {useEffect, useState} from "react";
import './CurrentWeather.css';
import moment from 'moment';

const CurrentWeather = () => {
    const [temperature, setTemperature] = useState('test');
    const [city, setCity] = useState('test');
    const [time, setTime] = useState('test');
    const [date, setDate] = useState('test');

    const updateTimeAndDate = () => {
        const now = new Date();
        setTime(moment(now).format('HH:mm'));
        setDate(moment(now).format('dddd, MMMM Do YYYY'));
    };

    useEffect(() => {
        const intervalId = setInterval(updateTimeAndDate, 1000);
        return () => clearInterval(intervalId);
    }, []);

    // Dummy function to fetch weather data (replace with actual API call)
    const fetchWeatherData = () => {
        // Example data, replace with actual API response
        setTemperature('25°C');
        setCity('San Francisco');
    };

    // useEffect to fetch weather data when the component mounts
    useEffect(() => {
        fetchWeatherData();
    }, []);


    return (
        <div className="weather__current">
            <div className="weather__temperature">{temperature}</div>
            <div className="weather__details">
                <span className="weather__city">{city}</span>
                <span className="weather__dateTime">{time} - {date}</span>
            </div>
        </div>
    );
};

export default CurrentWeather;