import React from "react";
import chair from "../../assets/images/chair.png";

const Banner = () => {
	return (
		<section>
			<div className="bg-[url('/src/assets/images/bg.png')] bg-cover h-[calc(100vh_-_4rem)] hero px-16">
				<div className='hero-content space-x-8'>
					<div className='w-1/2'>
						<h1 className='text-4xl font-bold'>
							Your New Smile Starts Here
						</h1>
						<p className='py-6'>
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<button className='bg-gradient-to-r border-0 btn btn-primary font-semibold from-primary hover:from-primary-focus shadow-lg shadow-secondary/50 hover:shadow-primary/50 to-secondary hover:to-secondary-focus text-base-100'>
							Get Started
						</button>
					</div>

					<img
						src={chair}
						className='rounded-lg shadow-2xl w-1/2'
						alt='doctor chair'
					/>
				</div>
			</div>
		</section>
	);
};

export default Banner;
