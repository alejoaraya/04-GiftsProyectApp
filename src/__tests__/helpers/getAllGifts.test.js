export const getAllGifts = async (query) => {
  const api_key = "7jn2P35A7MiykemHqu2zcFuvTzkPXZ3z";

  const { data } = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=3&q=${query}`
  ).then((response) => response.json());

  const images = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium.url,
  }));
  return images;
};
