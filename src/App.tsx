import './App.css'
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.tsx";
import WeatherSidebar from "./components/WeatherSideBar/WeatherSidebar.tsx";

function App() {
    const handleLocationSearch = (location: string) => {
        console.log('Searching for:', location);
    };
    return (
        <>
            <div className="block__weather__current">
                <CurrentWeather />
            </div>
            <WeatherSidebar onSearch={handleLocationSearch} />
        </>
    )
}

export default App
