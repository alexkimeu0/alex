import React from "react";
import { Link } from "react-router-dom";
import soda from "../images/soda.jpg";
import "./Nav.css";

const Nav = () => {
	return (
		<nav className="nav">
			<div class="container">
				<div class="menu">
					<ul class="left-menu">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/portfolio">Portfolio</Link>
						</li>
						<li>
							<Link to="/resume">Resume</Link>
						</li>
						<li>
							<Link to="/blog">Blog</Link>
						</li>
					</ul>

					<div className="image">
						<img src={soda} alt="" />
						<p>The Nerd Next Door</p>
					</div>

					<ul class="right-menu">
						<li>
							<a href="https://github.com/alexkimeu0">
								<i class="fab fa-github"></i>
							</a>
						</li>
						<li>
							<a href="https://twitter.com/alexkimeu0">
								<i class="fab fa-twitter"></i>
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/alexkimeu0/">
								<i class="fab fa-linkedin"></i>
							</a>
						</li>
						<li>
							<a href="https://medium.com/@alexkimeu0">
								<i class="fab fa-medium"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
