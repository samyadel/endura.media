import React from "react";
import "./Footer.styles.css";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import enduraLogo from "../../assets/endura-logo5.png";

function Footer() {
	return (
		<footer className="footer">
			<div className="footer-content">
				<h2 className="footer-heading">
					Sooo....Are you ready to boost your sales?
				</h2>
				<a href="https://calendly.com/samy-adel/consultation" target="_blank">
					<button className="footer-button">Book your free consultation</button>
				</a>
			</div>
			<div className="footer-nav">
				<img src={enduraLogo} className="logo" alt="Logo" />

				{/* <ul className="footer-links">
					<li>
						<a href="#about">About us</a>
					</li>
					<li
						<a href="#features">What we offer</a>
					</li>
					<li>
						<a href="#works">Prices</a>
					</li>
					<li>
						<a href="#support">Contact us</a>
					</li>
				</ul>
				<div className="footer-social">
					<a href="#twitter" className="social-icon">
						<FaTwitter />
					</a>
					<a href="#instagram" className="social-icon">
						<FaInstagram />
					</a>
					<a href="#tiktok" className="social-icon">
						<FaTiktok />
					</a>
				</div> */}
			</div>
			<div className="footer-bottom">
				<p>&copy; Copyright 2024, All Rights Reserved</p>
				<div className="footer-legal">
					<a href="https://samyadel.github.io/endura.media-privacy/" target="_blank">Privacy Policy</a>
					<a href="https://samyadel.github.io/endura.media-tos/" target="_blank">Terms & Conditions</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
