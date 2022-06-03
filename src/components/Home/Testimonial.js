import React from 'react';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';

const Testimonial = () => {
    return (
        <section className="bg-[url('/src/assets/icons/quote.svg')] bg-right-top bg-no-repeat bg-[length:15%_25%] mt-20">
            <h5 className='font-bold ml-12 text-primary text-lg'>Testimonial</h5>
            <h3 className='font-medium ml-12 mt-2 mb-20 text-2xl'>What Our Patients Says</h3>

            <div className='gap-12 grid grid-cols-3 px-16'>
                <div className='gap-6 grid grid-rows-2 p-6 place-content-between rounded-xl shadow-lg'>
                    <div>
                        <p className='font-semibold text-sm'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-1/4'><img className='ring-2 ring-offset-2 ring-primary rounded-full w-full' src={people1} alt="" /></div>
                        <div className='px-4 w-3/4'>
                            <h6>Winson Henry</h6>
                            <span className='font-semibold text-sm'>California</span>
                        </div>
                    </div>
                </div>

                <div className='gap-6 grid grid-rows-2 p-6 place-content-between rounded-xl shadow-lg'>
                    <div>
                        <p className='font-semibold text-sm'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-1/4'><img className='ring-2 ring-offset-2 ring-primary rounded-full w-full' src={people2} alt="" /></div>
                        <div className='px-4 w-3/4'>
                            <h6>Winson Henry</h6>
                            <span className='font-semibold text-sm'>California</span>
                        </div>
                    </div>
                </div>

                <div className='gap-6 grid grid-rows-2 p-6 place-content-between rounded-xl shadow-lg'>
                    <div>
                        <p className='font-semibold text-sm'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    </div>

                    <div className='flex items-center'>
                        <div className='w-1/4'><img className='ring-2 ring-offset-2 ring-primary rounded-full w-full' src={people3} alt="" /></div>
                        <div className='px-4 w-3/4'>
                            <h6>Winson Henry</h6>
                            <span className='font-semibold text-sm'>California</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;