import React, { useState } from "react";
import { AddCategory, GifGrid } from "components";

const GifExpertApp = () => {
	const [categories, setCategories] = useState(["Samurai X"]);

	return (
		<>
			<h2>Gif Expert App</h2>
			<AddCategory setCategories={setCategories} />
			<hr />

			<ol>
				{categories.map((category) => (
					<GifGrid key={category} category={category} />
				))}
			</ol>
		</>
	);
};
export default GifExpertApp;
