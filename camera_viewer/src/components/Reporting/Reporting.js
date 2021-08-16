import React from 'react';
import NavBar from '../NavBar/NavBar';

const Reporting = (props) => {
    return(
        <div>
            <NavBar 
                userName={props.userName}
                language={props.language}
            />
            <h2>This is the reporting page</h2>
        </div>
    )
}

export default Reporting