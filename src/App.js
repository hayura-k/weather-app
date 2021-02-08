import React from 'react';
import SearchForm from './components/SearchForm';
import Weather from './Api';

// const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/forecast'

const App = ()=> {
    return(
        <div className='container'>
            <h1>お天気検索</h1>
            {/* <SearchForm/> */}
            <Weather/>
        </div>
    )
}

export default App;
