import { React, useState, useEffect } from 'react';
import logo from '../../static/icons/logo.png'
import './LoginPage.css'
const LoginPage = (props) => {

    const [toggleStatus, setToggleStatus] = useState(false)
    // console.log(toggle.checked)
    const handleToggle = (e) => {
        e.target.checked ? setToggleStatus(true) : setToggleStatus(false)
    }

    useEffect(()=> {
        if (toggleStatus === true) {
            props.langChange()
        }
    })
    

    return (
        <div className="w-72 mt-12 mx-auto my-auto">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto" >
                <img className="tems-center h-16 mx-auto" alt="Placeholder Logo" src={logo} />

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
                <div className="text-gray-700 text-sm font-bold mb-2">
                    {props.language.login}
                </div>
                <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" onClick={props.onSubmit}/> 
            </form>    

            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                <input onClick={handleToggle} type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer" ></label>
            </div>
            <label htmlFor="toggle" className="text-xs text-gray-700">Toggle for French</label>

        </div>
    )
}

export default LoginPage