import { useGiphyStore } from "../hooks/useGiphyStore";

const DisplayGrid = (): JSX.Element => {
  const { giphyData, loading } = useGiphyStore();

  const gifs = giphyData.map((img) => ({
    title: img.title,
    img_url: img.images.fixed_width.url ?? img.images.original.url,
    alt: img.alt_text,
    max_width: img.images.fixed_width.width ?? img.images.original.width,
  }));

  const GridResult = () => {
    return gifs.map((datum) => (
      <div style={{ width: datum.max_width }}>
        <img src={datum.img_url} alt={datum.alt} />
        <p>{datum.title}</p>
      </div>
    ));
  };

  return <div>{loading ? <div>Loading</div> : <GridResult />}</div>;
};

export { DisplayGrid };
