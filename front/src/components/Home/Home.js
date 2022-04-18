import React, {Fragment, useEffect} from "react";
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import Product from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import {clearErrors, getProduct} from "../../actions/productAction";
import {useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader";
import {useAlert} from "react-alert";
const product = {
	name: "Blue shirt",

	price: "3000",
	id: "hehehe",
};
const Home = () => {
	const alert = useAlert();
	const dispatch = useDispatch();
	const {loading, error, products, productsCount} = useSelector(
		(state) => state.products
	); //products are in store so to fetch into home page use useSelecter
	useEffect(() => {
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}
		dispatch(getProduct());
	}, [dispatch]);
	return (
		<Fragment>
			{loading ? (
				<Loader />
			) : (
				<Fragment>
					<MetaData title="WebOutlet" />
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
					<div className="container" id="container">
						{/* <Product product={product} />
						<Product product={product} />
						<Product product={product} />
						<Product product={product} />
						<Product product={product} />
						<Product product={product} />
						<Product product={product} />
						<Product product={product} /> */}
						{/* {products &&
							products.map((product) => <Product product={product} />)} */}
					</div>
				</Fragment>
			)}
		</Fragment>
	);
};

export default Home;
