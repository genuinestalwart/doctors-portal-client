import React from "react";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Summary = () => {
	return (
		<section>
			<div className='gap-8 grid grid-cols-3 px-8 text-base-100'>
				<div className='bg-gradient-to-r flex from-primary px-3 py-6 rounded-xl space-x-3 to-secondary'>
					<div className='flex items-center justify-center w-1/4'>
						<img className='w-3/4' src={clock} alt='' />
					</div>

					<div>
						<h6 className='my-2'>Opening Hours</h6>
						<p className='text-sm'>
							Lorem Ipsum is simply dummy text of the pri
						</p>
					</div>
				</div>

				<div className='bg-accent flex px-3 py-6 rounded-xl space-x-3'>
					<div className='flex items-center justify-center w-1/5'>
						<img className='w-3/5' src={marker} alt='' />
					</div>

					<div>
						<h6 className='my-2'>Visit Our Location</h6>
						<p className='text-sm'>
							Brooklyn, NY 10036, United States
						</p>
					</div>
				</div>

				<div className='bg-gradient-to-r flex from-primary px-3 py-6 rounded-xl space-x-3 to-secondary'>
					<div className='flex items-center justify-center w-1/4'>
						<img className='w-3/4' src={phone} alt='' />
					</div>

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
