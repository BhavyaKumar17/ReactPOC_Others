import React from 'react';

export const Func = props => <h1>This is Func arrow function component of {props.name}</h1>

export class AnotherFunc extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>This is AnotherFunc class component of {this.props.name} who is {this.props.age} years old.</h2>
            
            {this.props.children}
            </div>
        )
    }
}