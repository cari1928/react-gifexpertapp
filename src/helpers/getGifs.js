export const getGifs = async (category) => {
	const API_KEY = "lZq9kF3d3LLSNFgxMuCirI5f5WFOdlCi";
	const URL = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
		category
	)}&limit=10&api_key=${API_KEY}`;

	const answer = await fetch(URL);
	const { data } = await answer.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));

	return gifs;
};
