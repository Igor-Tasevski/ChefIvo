import React from 'react'
import chef from '../assets/chef-ivo-icon.png'

const Header = () => {
    return (

        <div className="flex items-center justify-center bg-orange-100 shadow-md mt-2 pt-4 p-4">
            <img src={chef} alt="chef_icon" className="w-12 h-12 mr-4" />
            <h1 className="text-xl font-bold">CHEF IVO</h1>
        </div>
    )
}

export default Header