import React, { useState, useEffect } from "react";
import Item from "./Item";
import axios from "./axios";

import "./Resume.css";

const Resume = () => {
	const [resumes, setResumes] = useState([]);

	useEffect(() => {
		axios.get("/resume").then((res) => {
			setResumes(res.data);
		});
	});

	return (
		<div className="container">
			<div className="resume">
				<div className="experience">
					<h2>EXPERIENCE</h2>
					<div class="timeline">
						{resumes.map((item) => !item.education && <Item item={item} />)}
					</div>
				</div>
				<div className="education">
					<h2>EDUCATION</h2>
					<div class="timeline">
						{resumes.map((item) => item.education && <Item item={item} />)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Resume;
