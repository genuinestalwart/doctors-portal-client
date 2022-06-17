import React from "react";
import { useState } from "react";
import Calendar from "../Appointment/Calendar/Calendar";
import Services from "../Appointment/Services";

const currentDate = new Date();

const Appointment = () => {
	const [selected, setSelected] = useState(currentDate);

	return (
		<>
			<Calendar selected={selected} setSelected={setSelected}></Calendar>
			<Services selected={selected}></Services>
		</>
	);
};

export default Appointment;
