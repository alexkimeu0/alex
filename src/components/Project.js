import React from "react";

const Project = ({ project }) => {
	return (
		<div className="project">
			<a href={project.url}>
				<div className="project__card">
					<div className="project__cardHeader">
						<h2>{project.title}</h2>

						<div className="date">
							{" "}
							<p>{project.technologies}</p>
						</div>
					</div>

					<div className="project__cardBody">
						<img src={project.image} loading="lazy" alt={project.title} />
					</div>
				</div>
			</a>
		</div>
	);
};

export default Project;
