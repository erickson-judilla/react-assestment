import React from "react";
import "./ProductPage.css";
import { Link } from "react-router-dom";
import FormatPrice from "../../Helper/FormatPrice";
import { useProductContext } from "../../context/ProductContext";

const ShopPage = () => {
	const { isLoading, products } = useProductContext();
	console.log(products);
	return (
		<>
			<section>
				<div className="mx-auto max-w-screen-xl px-4 py-8">
					<div>
						<span className="inline-block h-1 w-12 bg-black" />
						<h2 className="mt-1 text-2xl font-extrabold uppercase tracking-wide lg:text-3xl">
							Products
						</h2>
					</div>

					<div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
						{isLoading ? (
							<div className="my-72 ml-96 pl-40 text-4xl font-bold">
								...Loading
							</div>
						) : (
							products?.products?.map((item) => (
								<Link
									to={`/singleproduct/${item.id}`}
									state={{ id: item.id }}
									key={item.id}
									className="block"
								>
									<div className="flex justify-center">
										<strong className="relative h-6 bg-black px-4 text-xs uppercase leading-6 text-white">
											New
										</strong>
									</div>
									<div className="product">
										<div className="product-img">
											<img
												alt="Jordan"
												src={item.thumbnail}
												className="product-img -mt-3 h-95 w-full object-cover"
											/>
											<img
												alt="Jordan"
												src={item.thumbnail2}
												className="rear-img -mt-3 h-95 w-full object-cover"
											/>
										</div>
									</div>
									<h3 className="mt-4 text-sm text-black/90">{item.title}</h3>
									<div className="mt-4 flex items-center justify-between font-bold">
										<p className="text-lg">
											{<FormatPrice price={item.price} />}
										</p>
										<p className="text-xs uppercase tracking-wide">
											{item.color}
										</p>
									</div>
								</Link>
							))
						)}
					</div>
				</div>
			</section>
		</>
	);
};

export default ShopPage;
