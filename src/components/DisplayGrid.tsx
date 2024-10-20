import { useGiphyStore } from "../hooks/useGiphyStore";

const DisplayGrid = (): JSX.Element => {
  const { giphyData } = useGiphyStore();

  const gifs = giphyData.map((img) => ({
    title: img.title,
    img_url: img.images.fixed_height.url ?? img.images.original.url,
    alt: img.alt_text,
  }));

  return (
    <div>
      {gifs.map((datum) => (
        <div>
          <p>{datum.title}</p>
          <img src={datum.img_url} alt={datum.alt} />
        </div>
      ))}
    </div>
  );
};

export { DisplayGrid };
