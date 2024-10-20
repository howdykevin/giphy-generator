const SkeletonGrid = (): JSX.Element => {
  return (
    <>
      {Array(6).fill(null).map((u,i) => (
        <div className="relative bg-slate-700 flex min-h-80 animate-pulse" key={i}/>
      ))}
    </>
  );
};

export { SkeletonGrid };
