import React from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const options = {
	edit: false,
	color: "rgba(20,20,20,0.1)",
	activateColor: "tomato",
	size: window.innerWidth < 600 ? 20 : 25,
	value: 2.5,
	ishHalf: true,
};
const ProductCard = ({product}) => {
	return (
		<>
			<Link className="productCard" to={`/product/${product._id}`}>
				<img src={require("./Images/Blueshirt.jpg")} alt={product.name} />
				<p>{product.name}</p>
				<div>
					<ReactStars {...options} />
					<span>(256 Reviews)</span>
				</div>
				<span>Price:Rs {product.price}</span>
			</Link>
		</>
	);
};

export default ProductCard;
