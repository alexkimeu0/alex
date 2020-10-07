import React, { useState } from "react";
import { Link } from "react-router-dom";
import Post from "./Post";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";

const Posts = ({ post }) => {
	const [blogPost, setBlogPost] = useState([]);

	const getPost = (id) => {
		return <Post />;
	};

	return (
		<Link to="/post">
			<div className="post">
				<div className="post__card">
					<div className="post__cardHeader">
						<h2>{post.title}</h2>

						<div className="date">
							{" "}
							<p> {post.createdAt}</p>
						</div>
					</div>

					<div className="post__cardBody">
						<img src={post.image} loading="lazy" alt={post.title} />
					</div>

					<div className="post__cardFooter">
						<IconButton>
							<FavoriteBorderIcon />
						</IconButton>
						<IconButton>
							<ChatOutlinedIcon />
						</IconButton>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default Posts;
