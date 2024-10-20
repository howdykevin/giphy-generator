import { useGiphyStore } from "../hooks/useGiphyStore";
import { SkeletonGrid } from "./SkeletonGrid";

const DisplayGrid = (): JSX.Element => {
  const { giphyData, loading } = useGiphyStore();

  const gifs = giphyData.map((img) => ({
    id: img.id,
    title: img.title,
    img_url: img.images.fixed_width.url ?? img.images.original.url,
    alt: img.alt_text,
    max_width: img.images.fixed_width.width ?? img.images.original.width,
  }));

  const GridResult = () => {
    return gifs.map((datum) => (
      <div className="group relative bg-slate-700 flex flex-col" key={datum.id}>
        <img className="flex-grow" src={datum.img_url} alt={datum.alt} />
        <p className="mt-auto text-sm text-white py-2 h-16 justify-self-center content-center">
          {datum.title}
        </p>
      </div>
    ));
  };

  return (
    <div className="grid gap-3 grid-flow-row grid-cols-3">
      {loading ? <SkeletonGrid /> : <GridResult />}
    </div>
  );
};

export { DisplayGrid };
