import React from 'react';
import doctorSmall from '../../assets/images/doctor-small.png';

const Appointment = () => {
    return (
        <section className="bg-[url('/src/assets/images/appointment.png')] bg-bottom bg-cover mt-20">
            <div className="hero pl-12 pr-28">
                <div className="gap-0 hero-content p-0">
                    <img src={doctorSmall} className="-mt-20 w-1/2" alt='' />

                    <div className='text-base-100 w-1/2'>
                        <h5 className='font-bold text-primary text-lg'>Appointment</h5>
                        <h2 className="text-3xl font-bold mt-6">Make an Appointment Today</h2>
                        <p className="pt-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="bg-gradient-to-r border-0 btn btn-primary font-semibold from-primary hover:from-primary-focus mt-6 shadow-lg shadow-secondary/50 hover:shadow-primary/50 to-secondary hover:to-secondary-focus text-base-100">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;