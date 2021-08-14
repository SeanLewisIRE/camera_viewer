import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../static/icons/logo.jpg'

const NavBar = () => {
    return (
        <nav className="block navbar container px-5 h-20 flex items-center justify-between">

            <Link to={"/"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                <img className="tems-center w-20" alt="Placeholder Logo" src={logo} />
            </Link>

            <Link to={"/Cameras"} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                hello
            </Link>
            {/* <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                world
            </Link> */}

            <div >

                <div className="flex">
                    <div className="px-4 py-2 text-sm text-gray-700">
                        Welcome UserName!
                    </div>
                    <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                        Logout
                    </button>

                </div>
            </div>
        </nav>
    )
}

export default NavBar;