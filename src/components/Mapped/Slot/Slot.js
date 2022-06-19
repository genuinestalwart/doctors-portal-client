import React from "react";
import "./Slot.css";

const Slot = ({ slot }) => {
	const { serviceName, visitingHours } = slot;

	return (
		<div className='hvr-grow py-8 rounded-xl shadow-lg space-y-6'>
			<div className='space-y-2 text-center'>
				<h6 className='text-primary'>{serviceName}</h6>
				<p className='font-semibold text-sm'>{visitingHours}</p>
			</div>

			<div className='flex justify-center'>
				<button className='bg-gradient-to-r border-0 btn btn-primary font-semibold from-primary hover:from-primary-focus text-base-100 to-secondary hover:to-secondary-focus w-1/2'>
					Book Appointment
				</button>
			</div>
		</div>
	);
};

export default Slot;
