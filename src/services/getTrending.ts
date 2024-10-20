import { GiphyResponse, ImageData } from "../types/giphy";

export const getTrending = async (): Promise<ImageData[]> => {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  const result = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=30&offset=0&rating=g&bundle=messaging_non_clips`
  );

  if (!result.ok) {
    console.error("Error encountered when calling giphy trending endpoint");
    throw new Error(result.statusText);
  }

  const responseBody: GiphyResponse = await result.json();

  return responseBody.data;
};
