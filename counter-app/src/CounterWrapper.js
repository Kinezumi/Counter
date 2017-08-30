import React from 'react';
import Counter from './Counter'

class CounterWrapper extends React.Component {
    state = {numCounters: 1};

    increment = () => {
        this.setState({numCounters: this.state.numCounters + 1});
    }
    
    decrement = () => {
        this.setState({numCounters: this.state.numCounters - 1});
    }
    
    reset = () => {
        this.setState({numCounters: this.state.numCounters = 0});
    }
    
    renderCounter = (_, index) =>
        <Counter key={index} />;
        
    renderCounters = () =>
        [...Array(this.state.numCounters)]
            .map(this.renderCounter);

    render(){
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
                {this.renderCounters() }
            </div>
        );
    }
}

export default CounterWrapper;