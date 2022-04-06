import React from "react";
//import playStore from "../../../images/playstore.png";
//import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
	return (
		<footer id="footer">
			<div className="leftFooter">
				<h4>DOWNLOAD OUR APP</h4>
				<p>Download App for Android and IOS mobile phone</p>
				{/* <img src={playStore} alt="playstore" />*/}

				{/*<img src={appStore} alt="Appstore" /> */}
			</div>

			<div className="midFooter">
				<h1>WEBOUTLET</h1>
				<p>High Quality is our first priority</p>

				<p>Copyrights 2021 &copy; Weboutlet</p>
			</div>

			<div className="rightFooter">
				<h4>Follow Us</h4>
				<a href="https://www.instagram.com/negativex_creep/?utm_medium=copy_link">
					Instagram
				</a>
				<a href="https://www.youtube.com/c/AbhaAcharya">Youtube</a>
				<a href="https://www.facebook.com/people/Nibika-Khatiwada/100009332085473/">
					Facebook
				</a>
			</div>
		</footer>
	);
};

export default Footer;
