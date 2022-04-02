import React, {Fragment} from "react";
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
const product = {
	name: "Blue shirt",

	price: "3000",
	id: "hehehe",
};
const Home = () => {
	return (
		<Fragment>
			<div className="banner">
				<p>Welcome to Weboutlet</p>
				<h1>We’re in Business to Improve Lives</h1>
				<a href="#container">
					<button>
						Scroll
						<CgMouse />
					</button>
				</a>
			</div>
			<h2 className="homeHeading">Featured Products</h2>
			<div className="contianer" id="container">
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />

				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
				<Product product={product} />
			</div>
		</Fragment>
	);
};

export default Home;
