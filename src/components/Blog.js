import React, { useState, useEffect } from "react";
import Posts from "./Posts";

import axios from "./axios";

import "./Blog.css";

const Blog = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		axios.get("/blog").then((res) => {
			setPosts(res.data);
		});
	});

	return (
		<div className="container">
			<div className="posts">
				{posts.map((post) => (
					<Posts post={post} />
				))}
			</div>
		</div>
	);
};

export default Blog;
