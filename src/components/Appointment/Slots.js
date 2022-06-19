import React, { useEffect, useState } from "react";
import Slot from "../Mapped/Slot/Slot";
import PageNav from "./PageNav";

const Slots = ({ selected, service }) => {
	const [serviceList, setServiceList] = useState([]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);

	useEffect(() => {
		fetch("./mockData.json")
			.then((res) => res.json())
			.then((data) => {
				if (service) {
					const filtered = data.filter(
						(slot) => slot.serviceName === service
					);
					setServiceList(filtered);
					setPages(Math.ceil(filtered.length / 6));
				} else {
					setServiceList(data);
					setPages(Math.ceil(data.length / 6));
				}
			});
	}, [service]);

	useEffect(() => {
		setCurrentPage(0);
	}, [pages]);

	return (
		<section>
			{selected ? (
				<div>
					<div>
						<h5 className='text-primary text-center text-lg'>
							Available Slots
							{service ? ` for ${service}` : ""}
						</h5>

						<div className='gap-8 grid grid-cols-3 mt-10 px-12'>
							{serviceList
								.slice(currentPage * 6, currentPage * 6 + 6)
								.map((slot) => (
									<Slot
										key={serviceList.indexOf(slot)}
										slot={slot}></Slot>
								))}
						</div>
					</div>

					<PageNav
						currentPage={currentPage}
						pages={pages}
						setCurrentPage={setCurrentPage}></PageNav>
				</div>
			) : (
				""
			)}
		</section>
	);
};

export default Slots;
