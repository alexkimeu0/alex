import React from "react";
import postImage from "../images/sort.png";

import "./Portfolio.css";

const Portfolio = () => {
	return (
		<div className="container">
			<div className="projects">
				<div className="project">
					<a href="https://covid-19-96184.web.app/" target="_blank">
						<div className="project__card">
							<div className="project__cardHeader">
								<h2>COVID-19 Tracker</h2>

								<div className="date">
									{" "}
									<p>React, Material UI, Firebase</p>
								</div>
							</div>

							<div className="project__cardBody">
								<img src={postImage} loading="lazy" alt="title" />
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
