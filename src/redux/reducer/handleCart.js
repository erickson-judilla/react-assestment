const cart = [];

const handleCart = (state = cart, action) => {
	const data = action.payload;
	switch (action.type) {
		case "ADDITEM":
			const exist = state.find((x) => x.id === data.id);
			if (exist) {
				return state.map((x) =>
					x.id === data.id ? { ...x, qty: x.qty + 1 } : x
				);
			} else {
				const data = action.payload;
				return [
					...state,
					{
						...data,
						qty: 1,
					},
				];
			}
			break;

		case "DELITEM":
			const exist1 = state.find((x) => x.id === data.id);
			if (exist1.qty === 1) {
				return state.filter((x) => x.id !== exist1.id);
			} else {
				return state.map((x) =>
					x.id === data.id ? { ...x, qty: x.qty - 1 } : x
				);
			}
			break;

		default:
			return state;
			break;
	}
};

export default handleCart;
