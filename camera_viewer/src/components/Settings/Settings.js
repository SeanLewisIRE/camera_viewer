import React from 'react';
import NavBar from '../NavBar/NavBar';

const Settings = (props) => {
    return(
        <div>
            <NavBar 
                userName={props.userName}
                language={props.language}
            />
            <h2>This is the settings page</h2>
        </div>
        
    )
}

export default Settings;