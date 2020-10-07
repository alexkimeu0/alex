import React from "react";

const Item = ({ item }) => {
	return (
		<div class="timeline-container">
			<div class="content">
				<h3 className="job-title">
					{item.title}
					<span>{item.timeline}</span>
				</h3>
				<h4>{item.company}</h4>
				<p>{item.description}</p>
			</div>
		</div>
	);
};

export default Item;
