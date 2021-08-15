import { React, useLayoutEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import CameraCard from '../CameraCard/CameraCard';
import baseUrl from '../../http-common';


const Cameras = (props) => {

    const [cameraData, setCameraData] = useState({
        cameraCount: 0,
        cameraResponses: []
    })

    const getCameraData = async () => {
        const camerasUrl = `${baseUrl}`;
        const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/json",
            "Access-Control-Allow-Origin": "*",
            }
        }

        fetch(camerasUrl, options)
        .then(response => response.json())
        .then(response => {
            let {camera_count, camera_responses} = {...response[0]}
            setCameraData({
                "cameraCount": camera_count,
                "cameraResponses": camera_responses
            })
        })
    }

    useLayoutEffect(() => {
    getCameraData()
  }, [])


    return (
        <div>
            <NavBar userName={props.userName}/>
            <h1 className="text-2xl font-bold text-gray-700 mx-auto my-2 text-center">Active Cameras: {cameraData.cameraCount}</h1>
            
            <div className=" h-screen w-full flex flex-col md:flex-row justify-around">
            {cameraData.cameraResponses.map((camera, index) => {
                return(
                    <CameraCard 
                        key={index}
                        index={index}
                        url={camera.url}
                        status={camera.pass_fail}
                    />
                )
            })}
            </div>
        </div>
    )
}

export default Cameras;