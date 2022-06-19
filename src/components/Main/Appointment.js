import React from "react";
import { useState } from "react";
import Calendar from "../Appointment/Calendar/Calendar";
import Services from "../Appointment/Services";
import Slots from "../Appointment/Slots";

const currentDate = new Date();
const services = [
	"Teeth Orthodontics",
	"Cosmetic Dentistry",
	"Teeth Cleaning",
	"Cavity Protection",
	"Pediatric Dental",
	"Oral Surgery",
];

const Appointment = () => {
	const [selected, setSelected] = useState(currentDate);
	const [service, setService] = useState("");

	return (
		<>
			<Calendar selected={selected} setSelected={setSelected}></Calendar>
			<Services
				selected={selected}
				service={service}
				services={services}
				setService={setService}></Services>
			<Slots selected={selected} service={service}></Slots>
		</>
	);
};

export default Appointment;
