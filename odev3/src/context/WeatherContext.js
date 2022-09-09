import citiesJSON from '../data/cities_of_turkey.json';
import { useContext, createContext } from 'react';
import { useState } from 'react'; 
import '../App.css'

const WeatherContext = createContext();
 
export const WeatherProvider = ({ children }) => {

  const [weather, setWeather] = useState([]);
 
  const [city, setCity] = useState(citiesJSON.find(item => item.id === 51));

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const value = {
    city,
    setCity,
    citiesJSON,
    days,
    weather,
    setWeather,
  };
  return (
    
    <WeatherContext.Provider value={value}>
      <h1 className='text'>The Weather Forecast</h1>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);