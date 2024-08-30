import React, { useState } from 'react'
import { link_styles } from '../CustomStyles/Styles';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className='px-4 flex lg:hidden shadow-md py-3'>
            {isOpen ? <svg onClick={toggleDrawer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
                :
                <svg onClick={toggleDrawer} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"
                    } transition-transform duration-300 ease-in-out`}
            >
                <div className="flex flex-col p-4 space-y-4">
                    <h1 className={link_styles}>Home</h1>
                    <h1 className={link_styles}>About Us</h1>
                    <h1 className={link_styles}>Blog</h1>
                    <h1 className={link_styles}>Pricing</h1>
                </div>
            </div>
        </div>

    )
}

export default Header;