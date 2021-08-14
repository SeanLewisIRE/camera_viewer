import React from 'react';
import NavBar from '../NavBar/NavBar';
// import baseUrl from './http-common';


const Cameras = (props) => {

      // const getCameraData = () => {
  //   const camerasUrl = `${baseUrl}`;
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       "Content-type": "application/json",
  //       "Access-Control-Allow-Origin": "*",
  //     }
  //   }

  //   fetch(camerasUrl, options)
  //     .then(response => response.json())
  //     .then(response => {console.log(response)})
  // }

  // useEffect(() => {
  //   getCameraData()
  // })

    return (
        <div>
            <NavBar />
            <h1>Cameras</h1>
            <h1>{props.userName}</h1>
        </div>
    )
}

export default Cameras;