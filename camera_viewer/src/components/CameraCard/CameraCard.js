import React from 'react'

const CameraCard = (props) => {
    let status = false
    if (props.status === "pass") {
        status = true
    }

    return (
        <div className="h-2/5 p-4 bg-gray-100 flex justify-center items-center">
            <div className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <img className="w-64 h-40 object-cover rounded-t-md" src={props.url} alt="" />
                <div className="mt-4">
                    <h1 className="text-1xl font-bold text-gray-700">Camera {props.index + 1}</h1>
                    <div className="mt-3 space-x-4 flex p-1 justify-between">
                        {status ? 
                            <div className="flex items-center">
                                <p>{props.language.status}: {props.language.statusMessagePass}</p>
                                <div className="ml-4 p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                                    <span className="block h-6 w-6 bg-green-400 rounded-full"> </span>
                                </div>
                            </div>
                        : 
                            <div className="flex items-center">
                                <p>{props.language.status}: {props.language.statusMessageFail}</p>
                                <div className="ml-4 p-1 border-4 rounded-full cursor-pointer hover:border-red-200 hover:scale-105 transition transform duration-200">
                                    <span className="block h-6 w-6 bg-red-400 rounded-full"> </span>
                                </div>
                            </div>
                        }
                        
                        
                    </div>
                    <div className="mt-4 mb-2 w-52 mx-auto">
                        <button className="text-lg block font-semibold py-2 px-6 text-white hover:text-green-100 bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">{props.language.camSettings}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameraCard;