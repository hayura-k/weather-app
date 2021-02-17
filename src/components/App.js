import React from 'react';
import Form from './Form';

class App extends React.Component {
    render(){
        return(
            <div className='container'>
                <h1>お天気検索</h1>
                <Form/>
            </div>
        )
    }
}

export default App;
