import React from 'react';


class StateUsageAdvance extends React.Component{
    constructor(){
        super()
        this.state={count: 0};
    }
    
    increment(num){
        this.setState({count: this.state.count + num });
    };

    decrement(num){
        this.setState({count: this.state.count - num });
    };
    
    reset(){
        this.setState({count: 0 });
    };
    
    render(){
        return(
            <div>
                <h2>Calculator</h2>
                <button onClick={() => this.increment(5)}>+ 5</button>
                <button onClick={() => this.increment(1)}>+ 1</button>
                <button onClick={() => this.decrement(1)}>- 1</button>
                <button onClick={() => this.reset()}>Reset</button>
                <h2>count is : {this.state.count}</h2>
            </div>
        )
    };
};
export default StateUsageAdvance;