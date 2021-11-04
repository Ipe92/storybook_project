import { useAppDispatch, useAppSelector } from "../../redux/hooks";

export const Posts = () => {
	const posts = useAppSelector((state) => state.post);
	console.log("POSTS", posts);
	const dispatch = useAppDispatch();

	const postItems = posts.map((post, index) => (
		<div key={index}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
		</div>
	));

	return (
		<div>
			<h1>Posts</h1>
			{postItems}
		</div>
	);
};

export default Posts;
