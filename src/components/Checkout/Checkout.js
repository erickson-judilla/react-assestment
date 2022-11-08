import React from "react";
import { useSelector } from "react-redux";
import FormatPrice from "../../Helper/FormatPrice";

const Checkout = () => {
	const userId = localStorage.getItem("userId");
	const state = useSelector((state) => state.handleCart);

	var total = 0;
	const itemList = (item) => {
		total = total + item.price;
		return (
			<li className="flex items-center justify-between py-4 pr-2">
				<div className="flex items-start">
					<img alt="Trainer" src={item.thumbnail} className="w-36" />
					<div className="ml-4">
						<p className="text-sm ml-36">{item.title}</p>
						<dl className="mt-1 space-y-1 text-xs text-gray-500"></dl>
					</div>
				</div>
				<div>
					<p className="text-md mt-6 mr-20">
						{<FormatPrice price={item.price} />}
					</p>
				</div>
			</li>
		);
	};
	return (
		<section>
			<h1 className="sr-only">Checkout</h1>
			<div className="relative mx-auto max-w-screen-2xl">
				<div className="grid grid-cols-1 md:grid-cols-2">
					<div className="bg-gray-50 py-12 md:py-24">
						<div className="mx-auto max-w-lg px-4 lg:px-8">
							<div className="flex items-center"></div>
							<div className="mt-8">
								<p className="text-2xl font-medium tracking-tight ml-30">
									Products
								</p>
							</div>
							<div className="mt-12">
								<div className="flow-root">
									<ul className="-my-4 divide-y divide-gray-200">
										{state.map(itemList)}
										<hr />
										<span className="text-1xl font-medium tracking-tight ml-20">
											Total (PHP)
										</span>
										<span className="ml-12">₱{total}</span>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div className="bg-white py-12 md:py-24">
						<div className="mx-auto max-w-lg px-4 lg:px-8">
							<form className="grid grid-cols-6 gap-4">
								<div className="col-span-3">
									<label
										className="mb-1 block text-sm text-gray-600"
										htmlFor="first_name"
									>
										First Name
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
										type="text"
										id="first_name"
									/>
								</div>
								<div className="col-span-3">
									<label
										className="mb-1 block text-sm text-gray-600"
										htmlFor="last_name"
									>
										Last Name
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
										type="text"
										id="last_name"
									/>
								</div>
								<div className="col-span-6">
									<label
										className="mb-1 block text-sm text-gray-600"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
										type="email"
										id="email"
									/>
								</div>
								<div className="col-span-6">
									<label
										className="mb-1 block text-sm text-gray-600"
										htmlFor="phone"
									>
										Phone
									</label>
									<input
										className="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm"
										type="tel"
										id="phone"
									/>
								</div>
								<fieldset className="col-span-6">
									<legend className="mb-1 block text-sm text-gray-600">
										Card Details
									</legend>
									<div className="-space-y-px rounded-lg bg-white shadow-sm">
										<div>
											<label className="sr-only" htmlFor="card-number">
												Card Number
											</label>
											<input
												className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
												type="text"
												name="card-number"
												id="card-number"
												placeholder="Card number"
											/>
										</div>
										<div className="flex -space-x-px">
											<div className="flex-1">
												<label
													className="sr-only"
													htmlFor="card-expiration-date"
												>
													Expiration Date
												</label>
												<input
													className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
													type="text"
													name="card-expiration-date"
													id="card-expiration-date"
													placeholder="MM / YY"
												/>
											</div>
											<div className="flex-1">
												<label className="sr-only" htmlFor="card-cvc">
													CVC
												</label>
												<input
													className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
													type="text"
													name="card-cvc"
													id="card-cvc"
													placeholder="CVC"
												/>
											</div>
										</div>
									</div>
								</fieldset>
								<fieldset className="col-span-6">
									<legend className="mb-1 block text-sm text-gray-600">
										Billing Address
									</legend>
									<div className="-space-y-px rounded-lg bg-white shadow-sm">
										<div>
											<label className="sr-only" htmlFor="country">
												Country
											</label>
											<select
												className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10"
												id="country"
												name="country"
												autoComplete="country-name"
											>
												<option>England</option>
												<option>Wales</option>
												<option>Scotland</option>
												<option>France</option>
												<option>Belgium</option>
												<option>Japan</option>
											</select>
										</div>
										<div>
											<label className="sr-only" htmlFor="postal-code">
												ZIP/Post Code
											</label>
											<input
												className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10"
												type="text"
												name="postal-code"
												id="postal-code"
												autoComplete="postal-code"
												placeholder="ZIP/Post Code"
											/>
										</div>
									</div>
								</fieldset>
								<div className="col-span-6">
									<button
										className="block w-full rounded-lg bg-black p-2.5 text-sm text-white"
										type="submit"
									>
										Pay Now
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Checkout;
