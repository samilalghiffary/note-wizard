const SkeletonCard = () => {
  return (
    <div className="card bg-gray-300 card-compact">
      <div className="card-body h-52 gap-3">
        <div className="card-title justify-between">
          <div className="h-5 w-20 rounded-full bg-gray-200"></div>
          <div className="h-3 w-10 rounded-full bg-gray-200"></div>
        </div>
        <div className="h-24 flex flex-col gap-2">
          <div className="h-4 w-full rounded-full bg-gray-200"></div>
          <div className="h-4 w-full rounded-full bg-gray-200"></div>
          <div className="h-4 w-full rounded-full bg-gray-200"></div>
          <div className="h-4 w-full rounded-full bg-gray-200"></div>
        </div>

        <div className="flex justify-between">
          <div className="h-4 w-20 rounded-full bg-gray-200"></div>
          <div className="h-4 w-12 rounded-full bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
