import React from 'react';
import treatment from '../../assets/images/treatment.png';

const Treatment = () => {
    return (
        <section className='mt-20'>
            <div className="hero px-40">
                <div className="hero-content justify-between">
                    <img src={treatment} className="rounded-lg shadow-lg w-2/5" alt='' />

                    <div className='w-1/2'>
                        <h2 className="text-4xl font-bold">Exceptional Dental Care, on Your Terms</h2>
                        <p className="font-semibold py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="bg-gradient-to-r border-0 btn btn-primary font-semibold from-primary hover:from-primary-focus shadow-lg shadow-secondary/50 hover:shadow-primary/50 to-secondary hover:to-secondary-focus text-base-100">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Treatment;