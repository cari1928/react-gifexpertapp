import { useEffect, useState } from "react";
import { getGifs } from "helpers";

// this is a hook
// differences with a func comp: does not require React, does not return jsx
export const useFetchGifs = (category) => {
	const [state, setState] = useState({
		data: [],
		loading: true,
	});

	useEffect(() => {
		getGifs(category).then((imgs) => {
			// setTimeout(() => {
			setState({
				data: imgs,
				loading: false,
			});
			// }, 3000);
		});
	}, [category]);

	return state;
};
