import React, { useState } from "react";
import "./Header.styles.css";
import logo from "../../assets/logo.png";
import enduraLogo from "../../assets/endura-logo5.png";
import { FaBars } from "react-icons/fa";

function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
	};

	return (
		<header className="header">
			{/* <FaBars className="hamburger" onClick={toggleMenu} /> */}

			<div>
				<img src={enduraLogo} className="logo" alt="Logo" />
			</div>

			{/* <div className={`nav-links ${menuOpen ? "open" : ""}`}>
				<ul className="headerLinks">
					<li>
						<a>About us</a>
					</li>
					<li>
						<a>What we offer</a>
					</li>
					<li>
						<a>Prices</a>
					</li>
				</ul>
			</div> */}

			<div>
				<a href="https://calendly.com/samy-adel/consultation" target="_blank">
					<button className="coa">Book your free consultation</button>
				</a>
			</div>
		</header>
	);
}

export default Header;
