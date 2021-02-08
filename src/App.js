import React from 'react';
import Weather from './Api';

class App extends React.Component {
    render(){
        return(
            <div className='container'>
                <h1>お天気検索</h1>
                <Weather/>
            </div>
        )
    }
}

export default App;
