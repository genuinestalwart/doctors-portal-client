import React from "react";
import flouride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const Services = () => {
	return (
		<section className='mt-24'>
			<h5 className='font-bold text-primary text-lg text-center uppercase'>
				Our Services
			</h5>
			<h3 className='font-medium mt-2 mb-12 text-2xl text-center'>
				Services We Provide
			</h3>

			<div className='gap-8 grid grid-cols-3 px-8 text-center'>
				<div className='grid grid-rows-2 p-8 place-content-between rounded-xl shadow-lg'>
					<div className='flex items-center justify-center'>
						<img className='w-1/4' src={flouride} alt='flouride' />
					</div>

					<div>
						<h6 className='font-medium mt-6 mb-2 text-accent text-opacity-75'>
							Flouride Treatment
						</h6>
						<p className='text-sm'>
							Lorem Ipsum is simply dummy printing and typesetting
							indust Ipsum has been the
						</p>
					</div>
				</div>

				<div className='grid grid-rows-2 p-8 place-content-between rounded-xl shadow-lg'>
					<div className='flex items-center justify-center'>
						<img className='w-1/4' src={cavity} alt='cavity' />
					</div>

					<div>
						<h6 className='font-medium mt-6 mb-2 text-accent text-opacity-75'>
							Cavity Filling
						</h6>
						<p className='text-sm'>
							Lorem Ipsum is simply dummy printing and typesetting
							indust Ipsum has been the
						</p>
					</div>
				</div>

				<div className='grid grid-rows-2 p-8 place-content-between rounded-xl shadow-lg'>
					<div className='flex items-center justify-center'>
						<img
							className='w-1/4'
							src={whitening}
							alt='whitening'
						/>
					</div>

					<div>
						<h6 className='font-medium mt-6 mb-2 text-accent text-opacity-75'>
							Teeth Whitening
						</h6>
						<p className='text-sm'>
							Lorem Ipsum is simply dummy printing and typesetting
							indust Ipsum has been the
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
