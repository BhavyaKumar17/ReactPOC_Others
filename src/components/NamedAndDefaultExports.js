import React from 'react';

export class NamedExportClass extends React.Component{
    render(){
        return(<div>This is named export class</div>);
    };
};

class DefaultExportClass extends React.Component{
    render(){
        return(<div>This is default export class</div>);
    };
};
export default DefaultExportClass;