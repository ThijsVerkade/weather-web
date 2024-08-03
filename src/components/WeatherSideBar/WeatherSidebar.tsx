import './WeatherSidebar.css';
import React from "react";
import LocationSearch from "../LocationSearch/LocationSearch.tsx";
import WeatherDetails from "../WeatherDetails/WeatherDetails.tsx";
import Sidebar from "../Sidebar/Sidebar.tsx";
import WeatherForecast from "../WeatherForecast/WeatherForecast.tsx";


interface LocationSearchProps {
    onSearch: (location: string) => void;
}


const WeatherSidebar: React.FC<LocationSearchProps> = ({onSearch}) => {
    const forecast = [
        { hour: '06:00', tempMax: 18, tempMin: 16, weatherDescription: 'Clear' },
        { hour: '09:00', tempMax: 20, tempMin: 18, weatherDescription: 'Sunny' },
        { hour: '12:00', tempMax: 24, tempMin: 22, weatherDescription: 'Partly Cloudy' },
        { hour: '15:00', tempMax: 26, tempMin: 24, weatherDescription: 'Cloudy' },
        { hour: '18:00', tempMax: 22, tempMin: 20, weatherDescription: 'Rainy' },
        { hour: '21:00', tempMax: 20, tempMin: 18, weatherDescription: 'Clear' },
        { hour: '00:00', tempMax: 18, tempMin: 16, weatherDescription: 'Clear' },
    ];

    return (
        <Sidebar className="weather-sidebar">
            <LocationSearch onSearch={onSearch} />
            <div className="weather-sidebar__details">Weather details... </div>
            <WeatherDetails
                weatherName="SUNNY"
                tempMax={30}
                tempMin={20}
                humidity={50}
                cloudy={10}
                wind={10}/>
            <WeatherForecast forecast={forecast} />
        </Sidebar>
    );
};

export default WeatherSidebar;