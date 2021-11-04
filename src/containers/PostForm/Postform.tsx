import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { posted } from "../../redux/features/post/post-slice";
import { useState, FormEvent, ChangeEvent } from "react";

const defaultFormData = {
	title: "",
	body: "",
};

export const PostForm = () => {
	const post = useAppSelector((state) => state.post.value);
	const dispatch = useAppDispatch();

	const [formData, setFormData] = useState(defaultFormData);
	const { title, body } = formData;

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		setFormData(defaultFormData);
		dispatch(posted(formData.title + formData.body));
	};

	return (
		<div>
			<h1>Form</h1>
			<p>Create a post</p>
			<form onSubmit={onSubmit}>
				<label htmlFor="title">Title</label>
				<br />
				<input type="text" id="title" value={title} onChange={onChange} />
				<br />
				<br />
				<label htmlFor="body">Body</label>
				<br />
				<input type="text" id="body" value={body} onChange={onChange} />
				<br />
				<br />
				<button type="submit">Upload post</button>
			</form>
		</div>
	);
};

export default PostForm;
