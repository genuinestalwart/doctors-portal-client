import React from 'react';
import { LocationMarkerIcon } from '@heroicons/react/solid';
import { ClockIcon, PhoneIcon } from '@heroicons/react/outline';

const Summary = () => {
    return (
        <section>
            <div className='gap-8 grid grid-cols-3 px-8 text-base-100'>
                <div className='bg-gradient-to-r flex from-primary items-center px-3 py-6 rounded-xl space-x-3 to-secondary'>
                    <div className='h-16 w-16'><ClockIcon className='h-full w-full'></ClockIcon></div>

                    <div>
                        <h6 className='my-2'>Opening Hours</h6>
                        <p className='text-sm'>Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>

                <div className='bg-accent flex items-center px-3 py-6 rounded-xl space-x-3'>
                    <div className='h-16 w-16'><LocationMarkerIcon className='h-full w-full'></LocationMarkerIcon></div>

                    <div>
                        <h6 className='my-2'>Visit Our Location</h6>
                        <p className='text-sm'>Brooklyn, NY 10036, United States</p>
                    </div>
                </div>

                <div className='bg-gradient-to-r flex from-primary items-center px-3 py-6 rounded-xl space-x-3 to-secondary'>
                    <div className='h-16 w-16'><PhoneIcon className='h-full w-full'></PhoneIcon></div>

                    <div>
                        <h6 className='my-2'>Contact Us Now</h6>
                        <p className='text-sm'>+000 123 456789</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;