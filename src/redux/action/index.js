//Add Item to Cart

export const addCart = (data) => {
	return {
		type: "ADDITEM",
		payload: data,
	};
};

//Add Delete to Cart

export const delCart = (data) => {
	return {
		type: "DELITEM",
		payload: data,
	};
};
