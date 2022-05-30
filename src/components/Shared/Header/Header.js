import React from 'react';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='h-16 flex justify-between px-16'>
            <h1 className='h-full flex font-bold items-center px-3 text-2xl'>Doctor's Portal</h1>
            <Navbar></Navbar>
        </header>
    );
};

export default Header;