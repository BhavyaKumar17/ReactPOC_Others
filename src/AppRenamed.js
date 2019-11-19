import React from 'react';
//import FunctionalComponent from './components/FunctionalComponent';
//import ClassComponent from './components/ClassComponent';
//import { NamedExportClass } from './components/NamedAndDefaultExports';
//import DefltXportClass from './components/NamedAndDefaultExports';
//import { Func } from './components/PropUsage';
//import {AnotherFunc} from './components/PropUsage';
//import StateUsage from './components/StateUsage';
////////import ErrorBoundary from './components/ErrorBoundary';
//import StateUsageAdvance from './components/StateUsageAdvance';
import Maiin from './calculator/components/Maiin';
////////import OpenList from './components/OpenList';
////////import Button from './Cal/components/Button';


class AppRenamed extends React.Component {
    render(){
        return(
            <div className="calculator-container">
               <Maiin />
            </div>
    
    //Example of List - incomplete    
    //    return(
    //        <div className="ExernalListMap">
    //            <OpenList urll: 'https://reactjs.org/'
    //                      name: 'Arj'
    //                      clas: '7th'
    //                      section: 'A' />
    //            <OpenList urll: 'https://reactjs.org/'
    //                      name: 'Srj'
    //                      clas: '7th'
    //                      section: 'S' />
    //        </div>
          
    //Example of list and map function    
    // const list= [
    //        {
    //          url: 'https://reactjs.org/',
    //          name: 'Arj',
    //          clas: '7th',
    //          section: 'A'
    //        },
    //        {        
    //            
    //            url: 'https://reactjs.org/',
    //            name: 'Srj',
    //            clas: '7th',
    //            section: 'S'
    //        }
    //        ];     
    //      return (
    //        <div className="App"> 
    //            {list.map(function(item) { 
    //                return ( 
    //                    <div> 
    //                        <span> 
    //                            <a href={item.url}>{item.name}</a> 
    //                        </span>
    //                        Introduction to List
    //                        
    //                        <span>{item.clas}</span> 
    //                        <span>{item.section}</span> 
    //                    </div> 
    //                ); 
    //            })} 
    //        </div>      
        
        
    //Example of StateUsageAdvance
    //    <div>
    //        <StateUsageAdvance />
    //    </div>
        
    //Example of simple State usage    
    //    <div>
    //        <StateUsage />
    //    </div>
        
    //Example of props and props.children
    //    <div>
    //        <Func name='Arav' />
    //        <AnotherFunc name='Anvi' age='24'>
    //            <p>This is the children property of Anvi and will print only if we will call {this.props.children}</p>
    //        </AnotherFunc>
    //        <AnotherFunc name='Brusily' age='25' />
    //        <p>This will print in all situations</p>
    //    </div>
        
    //Example of using 2 different types of ways of export     
    //   <div>
    //        <NamedExportClass />
    //        <DefltXportClass />
    //    </div>
        
    //Example of Functional and Class components
    //    <div>
    //        <FunctionalComponent /> 
    //        <ClassComponent />
    //    </div>
        
    //Example of hello world .... using a different name from App    
    //    <div className="AppRenamed">
    //        Hello World
    //    </div>
    );
  };
}
export default AppRenamed;
