import React from "react";

const Star = ({ rating }) => {
	return (
		<div className="block">
			<p>{rating} Star </p>
			<p>Customer Rating</p>
		</div>
	);
};

export default Star;
