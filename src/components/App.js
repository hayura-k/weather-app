import React from 'react';
import WeatherList from './WeatherList';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1 className='text-center'>お天気検索</h1>
                <WeatherList/>
            </div>
        );
    }
}

export default App;
