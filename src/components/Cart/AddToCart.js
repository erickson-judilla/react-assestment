import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddToCart = ({ product }) => {
	const [cart, setCart] = useState([]);
	const id = product;
	const handleClick = ({ product }) => {
		console.log(product);
	};
	return (
		<div>
			<Link
				className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
				to="/cart"
				handleClick={handleClick}
			>
				Add To Cart
			</Link>
		</div>
	);
};

export default AddToCart;
