import React from 'react'

const CameraCard = (props) => {
    let status = false
    let statusText = "Failed"
    if (props.status === "pass") {
        status = true
        statusText = "Passing"
    }

    return (
        <div className="p-4 bg-gray-100 flex justify-center items-center">
            <div className="w- p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
                <img className="w-64 object-cover rounded-t-md" src={props.url} alt="" />
                <div className="mt-4">
                    <h1 className="text-1xl font-bold text-gray-700">Camera {props.index + 1}</h1>
                    <div className="mt-3 space-x-4 flex p-1 text-center">
                        {status ? 
                            <div className="flex align-middle">
                                <p className="leading-6 ">Camera Status: {statusText}</p>
                                <div className="p-1 border-4 rounded-full cursor-pointer hover:border-green-200 hover:scale-105 transition transform duration-200">
                                    <span className="block h-6 w-6 bg-green-400 rounded-full"> </span>
                                </div>
                            </div>
                        : 
                            <div className="p-1 border-4 rounded-full cursor-pointer hover:border-red-200 hover:scale-105 transition transform duration-200">
                                <span className="block h-6 w-6 bg-red-400 rounded-full"> </span>
                            </div>
                        }
                        
                        
                    </div>
                    <div className="mt-4 mb-2 flex justify-between pl-4 pr-2">
                        <button className="block text-xl font-semibold text-gray-700 cursor-auto">$12.99</button>
                        <button className="text-lg block font-semibold py-2 px-6 text-white hover:text-green-100 bg-green-400 rounded-lg shadow hover:shadow-md transition duration-300">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameraCard;