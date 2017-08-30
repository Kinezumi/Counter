import React from 'react';
import Counter from './Counter';
import CounterWrapper from './CounterWrapper';

class App extends React.Component {
    
    render(){
        return(
            <div>
                <CounterWrapper />
            </div>
        );
    }
}

export default App;