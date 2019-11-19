import React from 'react';

const OpenList = ({list}) => {
    return(
        <div className="OpenList"> 
                {list.map(function(item) { 
                    return ( 
                        <div> 
                            <span> 
                                <a href={item.url}>{item.name}</a> 
                            </span>
                            Introduction to List
                            
                            <span>{item.clas}</span> 
                            <span>{item.section}</span> 
                        </div> 
                    ); 
                })} 
        </div>      
    );
};

export default OpenList;