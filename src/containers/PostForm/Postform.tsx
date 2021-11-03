import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { posted } from "../../redux/features/post/post-slice";
import { useState, FormEvent } from "react";

const Postform = () => {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");

	interface postFormInterface {
		title: string;
		body: string;
	}

	// const onChangeTitle = (e: InputEvent<HTMLInputElement>) => {
	// 	setTitle({ [e.target.name]: e.target.value });
	// };

	// const onChangeBody = (e: Inp) => {
	// 	setBody({ [e.target.name]: e.target.value });
	// };

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { name, value } = event?.target as typeof event.target & {
			name: { value: string };
			value: { value: string };
		};
	};

	return (
		<div>
			<h1>Add Post</h1>
			<form onSubmit={onSubmit}>
				<div>
					<fieldset>
						<label htmlFor="name">Name:</label>
						<input type="text" name="title" />
					</fieldset>
					<br />
				</div>
				<br />
				<div>
					<fieldset>
						<label htmlFor="password">Password:</label>
						<input type="password" />
						{/* <textarea name="body" value={body} onChange={onChangeBody} /> */}
					</fieldset>
				</div>
				<br />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default Postform;
