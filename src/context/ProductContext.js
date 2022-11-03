import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "../api/axios";
import reducer from "../reducer/ProductReducer";

const AppContext = createContext();

const API =
	"https://getpantry.cloud/apiv1/pantry/865e0167-a2ec-42a2-ba4b-76376112c695/basket/products";

const initialState = {
	isLoading: Boolean,
	isError: false,
	products: [],
	isSingleLoading: Boolean,
	singleProduct: {},
};

const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const getProducts = async (url) => {
		dispatch({ type: "SET_LOADING" });
		try {
			const res = await axios.get(url);
			const products = await res.data;
			dispatch({ type: "SET_API_DATA", payload: products });
		} catch (error) {
			dispatch({ type: "API_ERROR" });
		}
	};

	// my 2nd api call for single product

	const getSingleProduct = async (url) => {
		dispatch({ type: "SET_SINGLE_LOADING" });
		try {
			const res = await axios.get(url);
			const singleProduct = await res.data;
			dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
		} catch (error) {
			dispatch({ type: "SET_SINGLE_ERROR" });
		}
	};

	useEffect(() => {
		getProducts(API);
	}, []);

	return (
		<AppContext.Provider value={{ ...state, getSingleProduct }}>
			{children}
		</AppContext.Provider>
	);
};

// custom hooks
const useProductContext = () => {
	return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
