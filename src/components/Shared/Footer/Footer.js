import React from 'react';

const Footer = () => {
    const footerLinkStyle = 'block link link-hover my-1';

    return (
        <footer className='bg-base-200 block footer py-12 space-y-8'>
            <div className='flex justify-around'>
                <div className='text-left'>
                    <h5 className='footer-title text-lg'>Services</h5>
                    <span className={footerLinkStyle}>Emergency Checkup</span>
                    <span className={footerLinkStyle}>Monthly Checkup</span>
                    <span className={footerLinkStyle}>Weekly Checkup</span>
                    <span className={footerLinkStyle}>Deep Checkup</span>
                </div>
                <div className='text-left'>
                    <h5 className='footer-title text-lg'>Oral Health</h5>
                    <span className={footerLinkStyle}>Flouride Treatment</span>
                    <span className={footerLinkStyle}>Cavity Filling</span>
                    <span className={footerLinkStyle}>Teeth Whitening</span>
                </div>
                <div className='text-left'>
                    <h5 className='footer-title text-lg'>Our Address</h5>
                    <span className='block my-1'>New York - 101010 Hudson</span>
                </div>
            </div>
            <p className='block font-semibold text-center'>Copyright &copy;2022 - All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;