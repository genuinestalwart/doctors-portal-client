import React from "react";
import Service from "../Mapped/Service";

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

const Services = ({ selected, service, services, setService }) => {
	const [year, month, date] = [
		selected?.getFullYear(),
		selected?.getMonth(),
		selected?.getDate(),
	];

	return (
		<section className='mb-24'>
			<h5 className='text-primary text-center text-lg'>
				Available Services
				{selected ? ` on ${months[month]} ${date}, ${year}` : ""}
			</h5>
			<h6 className='my-2 opacity-60 text-center'>
				Please Select a Service
			</h6>

			{selected ? (
				<div className='gap-8 grid grid-cols-3 mt-10 px-12'>
					{services.map((serviceName) => (
						<Service
							key={services.indexOf(serviceName)}
							service={service}
							serviceName={serviceName}
							setService={setService}></Service>
					))}
				</div>
			) : (
				<div className='bg-base-200 bg-opacity-25 border border-primary border-solid flex font-bold h-48 items-center justify-center mt-10 mx-12 rounded-xl text-error'>
					None. Please select a date first.
				</div>
			)}
		</section>
	);
};

export default Services;
