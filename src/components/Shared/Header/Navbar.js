import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const applyClass = ({ isActive }) => {
		return `font-semibold px-3 ${
			isActive
				? "bg-accent text-base-100"
				: "bg-transparent hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-base-100"
		}`;
	};

	return (
		<nav className='navbar w-auto'>
			<div className='flex-none'>
				<ul className='menu menu-horizontal p-0 space-x-1'>
					<li>
						<NavLink className={applyClass} to='/'>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink className={applyClass} to='/about'>
							About
						</NavLink>
					</li>
					<li>
						<NavLink className={applyClass} to='/appointment'>
							Appointment
						</NavLink>
					</li>
					<li>
						<NavLink className={applyClass} to='/reviews'>
							Reviews
						</NavLink>
					</li>
					<li>
						<NavLink className={applyClass} to='/contact-us'>
							Contact Us
						</NavLink>
					</li>
					<li>
						<NavLink className={applyClass} to='/login'>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
