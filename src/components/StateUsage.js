import React from 'react';

class StateUsage extends React.Component {
    constructor(){
        super()
        this.state={show: 'I am initial state'};
    }
    
    changeState(){
        this.setState({show: 'I am clicked state'});
    }
    
    render(){
        return(
            <div>
                <h1>{this.state.show}</h1>
                <button onClick={() => this.changeState()}>Click</button>
            </div>
        );
    };
};
export default StateUsage;