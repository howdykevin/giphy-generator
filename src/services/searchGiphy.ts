import { GiphyResponse, ImageData } from "../types/giphy";

export const searchGiphy = async (searchText: string): Promise<ImageData[]> => {
    const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
    const result = await fetch(`
        https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchText}&limit=30&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    )

    if (!result.ok) {
        console.error("Error encountered when calling giphy search endpoint")
        throw new Error(result.statusText);
    }

    const responseBody: GiphyResponse = await result.json();

    return responseBody.data
}