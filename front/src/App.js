import React, {Fragment, useRef} from "react";
import {render} from "react-dom";
import Header from "./components/layout/Header/Header.js";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Webfont from "webfontloader";
import "./App.css";
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";
import LoginSignup from "./components/User/LoginSignup.js";
import ProductDetails from "./components/Product/ProductDetails.js";
function App() {
	React.useEffect(() => {
		Webfont.load({
			google: {
				families: ["Roboto", "Droid Sans", "Chilanka"],
			},
		});
	}, []);
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/account" element={<LoginSignup />} />
				<Route path="/product/:id" element={<ProductDetails />} />
			</Routes>

			<Footer />
		</Router>
	);
}

export default App;
