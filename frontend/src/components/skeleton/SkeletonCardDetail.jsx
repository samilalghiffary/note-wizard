const SkeletonCardDetail = () => {
  return (
    <div className="card-body animate-pulse">
      <div className="h-5 w-48 bg-gray-300 rounded-full mb-3"></div>

      <div className="h-52 gap-2 flex flex-col">
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
        <div className="h-4 w-full bg-gray-300 rounded-full"></div>
      </div>

      <div className="flex justify-between">
        <div className="h-2 w-20 bg-gray-300 rounded-full"></div>
        <div className="h-2 w-20 bg-gray-300 rounded-full"></div>
      </div>
      <div className="flex items-center justify-between">
        <div className="gap-1 flex">
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
          <div className="h-6 w-6 rounded-full bg-gray-300"></div>
        </div>
        <div className="gap-2 flex">
          <div className="h-8 w-16 bg-gray-300 rounded-full"></div>
          <div className="h-8 w-16 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCardDetail;
