import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterPage from "./Pages/Footer/FooterPage";
import HeaderPage from "./components/Header/HeaderPage";
import HomePage from "./Pages/Home/HomePage";
import Error404 from "./Pages/NotFoundPage/Error404";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./Pages/Products/ProductPage";
import ShoppingCart from "./components/Cart/ShoppingCart";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import SingleProduct from "./Pages/Products/SingleProduct";
import Checkout from "./components/Checkout/Checkout";

function App() {
	return (
		<div className="App">
			<Router>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="dark"
				/>
				<HeaderPage />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/shop" element={<ProductPage />} />
					<Route path="/singleproduct/:id" element={<SingleProduct />} />
					<Route path="/cart" element={<ShoppingCart />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
					<Route path="/*" element={<Error404 />} />
				</Routes>
				<FooterPage />
			</Router>
		</div>
	);
}

export default App;
