import React from "react";

const PageNav = ({ currentPage, pages, setCurrentPage }) => {
	return (
		<div className='flex justify-center my-24'>
			<div className='btn-group'>
				<button
					onClick={() => {
						if (currentPage > 0) {
							setCurrentPage(currentPage - 1);
						}
					}}
					className={`btn btn-outline btn-primary ${
						!currentPage ? "btn-disabled disabled:btn-accent" : ""
					}`}
					disabled={!currentPage ? true : false}>
					Previous
				</button>
				{[...Array(pages).keys()].map((num) => (
					<button
						key={num}
						onClick={() => setCurrentPage(num)}
						className={`btn btn-outline btn-primary ${
							currentPage === num ? "btn-active" : ""
						}`}>
						{num + 1}
					</button>
				))}
				<button
					onClick={() => {
						if (currentPage + 1 !== pages) {
							setCurrentPage(currentPage + 1);
						}
					}}
					className={`btn btn-outline btn-primary ${
						currentPage + 1 === pages
							? "btn-disabled disabled:btn-accent"
							: ""
					}`}
					disabled={currentPage + 1 === pages ? true : false}>
					Next
				</button>
			</div>
		</div>
	);
};

export default PageNav;
