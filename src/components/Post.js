import React from "react";
import postImage from "../images/sort.png";

import "./Post.css";

const Post = ({ post }) => {
	console.log(post);
	return (
		<div className="container">
			<div className="blog-post">
				<h1 className="post-title">
					JS Array sort() Method.<span>September 2, 2020</span>
				</h1>
				<img src={postImage} loading="lazy" alt="Title" />
				<p>
					This method sorts the elements of an array in ascending order by
					default. It converts the elements from the array to strings then
					compares their sequences of utf-16 code values. For an array of
					strings, this works perfectly fine. However, to sort an array of
					numbers, this method will not work as expected because it converts the
					elements to strings first. To achieve what you expect, you can provide
					a compare function as a callback to the sort method. There are 3
					possible outcomes in the callback function:
					<br />
					{"<"} : a comes first <br /> 0 : no change
					<br />
					{">"} 0 : b comes first
					<br /> If you want to sort in descending order, you can return b - a
					in the callback function.
				</p>
			</div>
		</div>
	);
};

export default Post;
