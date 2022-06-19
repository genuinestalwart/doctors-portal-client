import React from "react";

const Service = ({ service, serviceName, setService }) => {
	const buttonStyle =
		"hover:bg-gradient-to-r border-0 btn btn-primary font-bold hover:from-primary h-auto normal-case p-6 rounded-xl shadow-md text-primary hover:text-base-100 hover:to-secondary text-center";
	const selectedButtonStyle =
		"bg-gradient-to-r from-primary text-base-100 to-secondary";

	const handleService = (name) => {
		if (service === name) {
			setService("");
		} else {
			setService(name);
		}
	};

	return (
		<button
			onClick={() => handleService(serviceName)}
			className={`${
				service === serviceName ? selectedButtonStyle : "bg-base-100"
			} ${buttonStyle}`}>
			{serviceName}
		</button>
	);
};

export default Service;
