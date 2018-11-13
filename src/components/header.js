import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
	render() {
		return (
			<header>
				<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
					<div className="container">
						<Link className="navbar-brand" to="/">
							LeFlair
						</Link>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;