import FormatPrice from "../../Helper/FormatPrice";
import { useDispatch } from "react-redux";
import { addCart } from "../../redux/action";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Star from "../../components/Reviews/Star";

const SingleProduct = () => {
	const { id } = useParams();
	const [data, setData] = useState({});

	const dispatch = useDispatch();
	const addData = (data) => {
		dispatch(addCart(data));
	};

	useEffect(() => {
		getSingleProd();
	}, [id]);

	const getSingleProd = () => {
		const prod = fetch(`https://dummyjson.com/products/${id}`)
			.then((response) => response.json())
			.then((data) => setData(data));
		return prod;
	};

	return (
		<section>
			<div className="relative mx-auto max-w-screen-xl px-4 py-8" key={data.id}>
				<div>
					<h1 className="text-2xl font-bold lg:text-3xl">{data.title}</h1>
					<p className="mt-1 text-sm text-gray-500">{data.brand}</p>
				</div>
				<div className="grid gap-8 lg:grid-cols-4 lg:items-start">
					<div className="lg:col-span-3">
						<div className="relative mt-4">
							<img
								alt="Tee"
								src={data.thumbnail}
								className="h-72 w-full rounded-xl object-cover lg:h-[540px]"
							/>
							<div className="absolute bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center rounded-full bg-black/75 px-3 py-1.5 text-white">
								<svg
									className="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
									/>
								</svg>
								<span className="ml-1.5 text-xs"> Hover to zoom </span>
							</div>
						</div>
						<ul className="mt-1 flex gap-1">
							{data?.images?.map((item) => (
								<li>
									<img
										alt="Jordan"
										src={item}
										className="h-16 w-16 rounded-md object-cover"
									/>
								</li>
							))}
						</ul>
					</div>
					<div className="lg:sticky lg:top-0">
						<form className="space-y-4 lg:pt-8">
							<fieldset>
								<div className="mt-2 flex gap-1">
									<label htmlFor="material_cotton" className="cursor-pointer">
										<input
											type="radio"
											id="material_cotton"
											name="material"
											className="peer sr-only"
											defaultChecked
										/>
									</label>
									<p className=" mx-auto text-xl font-bold">Description</p>
								</div>
							</fieldset>
							<fieldset>
								<div className="mt-2 flex gap-1">
									<label htmlFor="material_cotton" className="cursor-pointer">
										<input
											type="radio"
											id="material_cotton"
											name="material"
											className="peer sr-only"
											defaultChecked
										/>
									</label>
									<p className=" mx-auto text-xl ">{data.description}</p>
								</div>
							</fieldset>
							<fieldset>
								<legend className="text-lg font-bold">
									<Star rating={data.rating} />
								</legend>
							</fieldset>

							<fieldset>
								<div className="mt-2 flex gap-1">
									<label htmlFor="material_cotton" className="cursor-pointer">
										<input
											type="radio"
											id="material_cotton"
											name="material"
											className="peer sr-only"
											defaultChecked
										/>
									</label>
									<p className=" mx-auto text-xl font-bold">
										Available: {data.stock > 0 ? "In Stock" : "Not Available"}
									</p>
								</div>
							</fieldset>
							<fieldset>
								<div className="mt-2 flex gap-1">
									<label htmlFor="material_cotton" className="cursor-pointer">
										<input
											type="radio"
											id="material_cotton"
											name="material"
											className="peer sr-only"
											defaultChecked
										/>
									</label>
									<p className=" mx-auto text-xl font-bold">
										Category: {data.category}
									</p>
								</div>
							</fieldset>
							<div>
								<p className="text-xl font-bold">
									Price: {<FormatPrice price={data.price} />}
								</p>
							</div>
							<hr className="font-bold my-2" />
							<br />
							{data.stock > 0 && (
								<Link
									to="/cart"
									className="w-full rounded bg-red-700 px-6 py-3 text-sm font-bold uppercase tracking-wide text-white"
									onClick={() => addData(data)}
								>
									Add to Cart
								</Link>
							)}
						</form>
					</div>
					<div className="lg:col-span-3">
						<div className="prose max-w-none [&>iframe]:mt-6 [&>iframe]:aspect-video [&>iframe]:w-full [&>iframe]:rounded-xl">
							<br />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;
