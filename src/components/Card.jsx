import React from 'react';

export const Card = ({ img, title, description, address, price, discount }) => {
	return (
		<>
			<div className="card mx-2">
				<img
					src={img}
					className="card-img-top"
					alt="Plumon"
				/>
				<div className="card-body">
					<h5 className="card-title fw-light mb-3">{title}</h5>
					<p className="card-text h6 fw-light">{description}</p>
					<p className="fw-light">
						<i className="fas fa-map-marker-alt fa-xs"></i>
						{address}
					</p>
					<hr />
					<ul className="list-group list-group-flush text-right">
						<li className="list-group-item ms-auto fw-light gris py-0 pe-1 2 1 5 py-0 pe-1 2 1 5">
							${price}
							<span className="h5 fw-bold green ms-3">${discount}</span>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
