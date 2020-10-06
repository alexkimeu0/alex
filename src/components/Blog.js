import React from "react";
import { Link } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import postImage from "../images/sort.png";

import "./Blog.css";

const Blog = () => {
	return (
		<div className="container">
			<div className="posts">
				<div className="post">
					<Link to="/post">
						<div className="post__card">
							<div className="post__cardHeader">
								<h2>JS Array sort() Method</h2>

								<div className="date">
									{" "}
									<p> September 2, 2020</p>
								</div>
							</div>

							<div className="post__cardBody">
								<img src={postImage} loading="lazy" alt="title" />
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
					</Link>
				</div>

				<div className="post">
					<Link to="/post">
						<div className="post__card">
							<div className="post__cardHeader">
								<h2>JS Array sort() Method</h2>

								<div className="date">
									{" "}
									<p> September 2, 2020</p>
								</div>
							</div>

							<div className="post__cardBody">
								<img src={postImage} loading="lazy" alt="title" />
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
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Blog;
