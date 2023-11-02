import SkeletonCard from './SkeletonCard';

const SkeletonNotes = () => {
  return (
    <div className="p-5 gap-4 flex flex-col animate-pulse">
      <div className="flex justify-between">
        <div className="h-9 w-24 bg-gray-300 rounded-full"></div>
        <div className="p-3">
          <div className="h-7 w-20 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default SkeletonNotes;
