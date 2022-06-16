import React, { useState } from "react";
import "react-day-picker/dist/style.css";
import "./Calendar.css";
import { DayPicker } from "react-day-picker";
import chair from "../../../assets/images/chair.png";

// getting the present date
const currentDate = new Date();
const [year, currentMonth, date] = [
	currentDate.getFullYear(),
	currentDate.getMonth(),
	currentDate.getDate(),
];

// the date that comes after a year
const toMonth = new Date(year + 1, currentMonth, date - 1);

const Calendar = () => {
	const [selected, setSelected] = useState();
	const [rdpDate, setMonth] = useState(currentDate);

	return (
		<section>
			<div className="bg-[url('/src/assets/images/bg.png')] bg-cover h-[calc(100vh_-_4rem)] hero px-16">
				<div className='hero-content space-x-8'>
					<div className='flex justify-center w-1/2'>
						<DayPicker
							className='bg-base-100 p-4 rounded-xl shadow-lg'
							classNames={{
								button: "",
								button_reset: "",

								// styling each day of the months
								day: "hover:bg-gradient-to-r hover:from-primary h-8 min-h-fit rounded-full hover:to-secondary hover:text-base-100 w-8",
								day_disabled: "opacity-25 pointer-events-none",
								day_selected:
									"bg-gradient-to-r from-primary to-secondary text-base-100",

								// styling the previous and next buttons
								nav_button:
									"bg-transparent hover:bg-gradient-to-r border-0 btn btn-primary hover:from-primary h-8 min-h-fit p-0 rounded-full hover:to-secondary hover:text-base-100 w-8",
								nav_button_previous: `${
									currentMonth === rdpDate.getMonth() &&
									year === rdpDate.getFullYear()
										? "opacity-25 pointer-events-none"
										: ""
								} rdp-nav_button_previous`,
								nav_button_next: `${
									currentMonth === rdpDate.getMonth() &&
									year + 1 === rdpDate.getFullYear()
										? "opacity-25 pointer-events-none"
										: ""
								} rdp-nav_button_next`,
							}}
							defaultMonth={new Date(year, rdpDate)}
							// disabling the out-of-range days
							disabled={[
								{
									from: new Date(year, currentMonth, 0),
									to: new Date(year, currentMonth, date - 1),
								},
								{
									from: new Date(
										year + 1,
										currentMonth,
										date
									),
									to: new Date(year + 1, currentMonth + 1, 0),
								},
							]}
							fixedWeeks
							fromMonth={currentDate}
							fromYear={year}
							mode='single'
							month={rdpDate}
							onMonthChange={setMonth}
							onSelect={setSelected}
							selected={selected}
							toMonth={toMonth}
							toYear={year + 1}
						/>
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

export default Calendar;
