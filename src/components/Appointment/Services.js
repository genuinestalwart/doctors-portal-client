import React from "react";

const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

const Services = ({ selected }) => {
	const [year, month, date] = [
		selected.getFullYear(),
		selected.getMonth(),
		selected.getDate(),
	];

	return (
		<section className='mb-24'>
			<h5 className='text-primary text-center text-lg'>
				Available Services on {months[month]} {date}, {year}
			</h5>
			<h6 className='my-2 opacity-60 text-center'>
				Please Select a Service
			</h6>

			<div className='gap-8 grid grid-cols-3 mt-10 px-12'>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Teeth Orthodontics
				</div>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Cosmetic Dentistry
				</div>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Teeth Cleaning
				</div>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Cavity Protection
				</div>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Pediatric Dental
				</div>
				<div className='font-bold p-6 rounded-xl shadow-md text-primary text-center'>
					Oral Surgery
				</div>
			</div>
		</section>
	);
};

export default Services;
