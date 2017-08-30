import React from 'react';

class Counter extends React.Component {
    state = {value: 0};
    
    increment = () => {
        this.setState({value: this.state.value + 1});
    }
    
    decrement = () => {
        this.setState({value: this.state.value - 1});
    }
    
    reset = () => {
        this.setState({value: this.state.value = 0});
    }
    
    componentDidMount(){
        this.timer = setInterval(this.increment, 1000);
    }
                                 
    componentWillUnmount() {
        clearInterval(this.timer);    
    }
    
    render(){
        return(
            <div>
                <div>{this.state.value}</div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.reset}>reset</button>
            </div>
        )
    }
}

export default Counter;