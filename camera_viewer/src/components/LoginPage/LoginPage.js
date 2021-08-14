import React from 'react';
import { useHistory } from 'react-router-dom';

const LoginPage = (props) => {

    let history = useHistory()
    const login = (e) => {
        e.preventDefault();
        const loggedInPath = "/cameras"
        history.push(loggedInPath)
    }

    return (
        <div className="w-full max-w-xs">
            <form onSubmit={props.onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input onChange={props.onChange} value={props.value} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="joe@bloggs.com" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="**********" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={login}>
                        Sign In
                    </button>
                </div>
            </form>        
        </div>
    )
}

export default LoginPage