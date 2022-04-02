import React from "react";
import {render} from "react-dom";
import Header from "./components/layout/Header/Header.js";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Webfont from "webfontloader";
import "./App.css";
import Footer from "./components/layout/Footer/Footer.js";
import Home from "./components/Home/Home.js";

function App() {
	React.useEffect(() => {
		Webfont.load({
			google: {
				families: ["Roboto", "Droid Sans", "Chilanka"],
			},
		});
	}, []);
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
