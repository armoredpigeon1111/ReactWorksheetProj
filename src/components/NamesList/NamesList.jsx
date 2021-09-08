import React from 'react';

const NamesList = (props) => {
    return ( 
        <ul>
            {props.names.map(name =>(
                <li>{name}</li>
            ))}
        </ul>
     );
}
 
export default NamesList;