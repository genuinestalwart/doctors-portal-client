import React from "react";

const ContactUs = () => {
	return (
		<section className="bg-[url('/src/assets/images/appointment.png')] bg-center bg-cover mt-24 py-12">
			<h5 className='font-bold text-primary text-lg text-center'>
				Contact Us
			</h5>
			<h2 className='text-3xl font-medium my-2 text-base-100 text-center'>
				Stay Connected with Us
			</h2>

			<form onSubmit={(e) => e.preventDefault()} className='hero'>
				<div className='hero-content p-0 w-1/3'>
					<div className='card flex-shrink-0 rounded-none w-full'>
						<div className='card-body p-0'>
							<div className='gap-y-6 grid mt-6'>
								<div className='form-control'>
									<input
										type='text'
										placeholder='Email Address'
										className='input'
									/>
								</div>

								<div className='form-control'>
									<input
										type='text'
										placeholder='Subject'
										className='input'
									/>
								</div>

								<div className='form-control'>
									<textarea
										className='textarea'
										placeholder='Your message'
										rows={4}></textarea>
								</div>
							</div>

							<div className='flex-row form-control justify-center mt-6'>
								<button
									type='submit'
									className='bg-gradient-to-r border-0 btn btn-primary font-semibold from-primary hover:from-primary-focus shadow-lg shadow-secondary/50 hover:shadow-primary/50 to-secondary hover:to-secondary-focus text-base-100 w-3/5'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default ContactUs;
