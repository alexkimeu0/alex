import React, { useEffect, useState } from "react";
import postImage from "../images/sort.png";

import Project from "./Project";

import axios from "./axios";

import "./Portfolio.css";

const Portfolio = () => {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		axios.get("/portfolio").then((res) => {
			setProjects(res.data);
		});
	}, []);

	return (
		<div className="container">
			<div className="projects">
				{projects.map((project) => (
					<Project project={project} />
				))}
			</div>
		</div>
	);
};

export default Portfolio;
