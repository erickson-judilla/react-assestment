import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../../context/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const LOGIN_URL = " https://dummyjson.com/auth/login";

export const LoginPage = () => {
	const { username, setUsername, password, setPassword } =
		useContext(AuthContext);

	const usernameRef = useRef();
	const errRef = useRef();
	const [errMsg, setErrMsg] = useState("");

	useEffect(() => {
		usernameRef.current.focus();
	}, []);

	useEffect(() => {
		setErrMsg("");
	}, [username, password]);

	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			await axios
				.post(LOGIN_URL, {
					username,
					password,
				})
				.then((res) => {
					if (typeof res.data !== "undefined") {
						localStorage.setItem("token", res?.data?.token);
						localStorage.setItem("userId", res?.data?.id);
						navigate("/shop");
						toast.success("Successfully logged in");
					}
				});
		} catch (err) {
			if (!err?.response) {
				setErrMsg("No Server Response");
			} else if (err.response?.status === 400) {
				setErrMsg("Unauthorized");
			} else {
				setErrMsg("Login Failed");
			}
			errRef.current.focus();
		}
	};
	return (
		<>
			<div className="mx-auto flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 my-36">
				<p
					ref={errRef}
					className={errMsg ? "errmsg" : "offscreen"}
					aria-live="assertive"
				>
					{errMsg}
				</p>
				<div className="mb-8 text-center">
					<h1 className="my-3 text-4xl font-bold">Sign in</h1>
					<p className="text-sm">Sign in to access your account</p>
				</div>
				<form className="space-y-12 ng-untouched ng-pristine ng-valid">
					<div className="space-y-4">
						<div>
							<label htmlFor="email" className="block mb-2 text-sm mr-60 pr-24">
								Email
							</label>
							<input
								type="text"
								id="email"
								ref={usernameRef}
								placeholder="leroy@gmail.com"
								autoComplete="off"
								onChange={(e) => setUsername(e.target.value)}
								required
								className="w-full px-3 py-2 border rounded-md "
							/>
						</div>
						<div>
							<div className="flex justify-between mb-2">
								<label htmlFor="password" className="text-sm">
									Password
								</label>
							</div>
							<input
								type="password"
								id="password"
								placeholder="**********"
								onChange={(e) => setPassword(e.target.value)}
								required
								className="w-full px-3 py-2 border rounded-md "
							/>
						</div>
					</div>
					<div className="space-y-2">
						<div>
							<button
								onClick={handleSubmit}
								className="w-full px-8 py-3 border   font-semibold rounded-md bg-black border-white text-white"
							>
								Sign in
							</button>
						</div>
						<p className="px-6 text-sm text-center">
							Don't have an account yet?
							<Link
								rel="noopener noreferrer"
								to="/register"
								className="hover:underline text-red-600 pl-1 font-semibold"
							>
								Sign up
							</Link>
							.
						</p>
					</div>
				</form>
			</div>
		</>
	);
};

export default LoginPage;
