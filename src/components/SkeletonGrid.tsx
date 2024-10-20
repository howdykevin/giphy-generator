const SkeletonGrid = (): JSX.Element => {
  return (
    <>
      {Array(9).fill(null).map((_,i) => (
        <div className="relative bg-slate-700 flex min-h-80 animate-pulse" key={i}/>
      ))}
    </>
  );
};

export { SkeletonGrid };
