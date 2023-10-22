import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';

const Archive = () => {
  return (
    <Drawer currentPage="archive">
      <NavBar />
      <div className="container p-5">
        <h1 className="text-3xl">Hello sam</h1>
        <p>Archive goes here!</p>
      </div>
    </Drawer>
  );
};

export default Archive;
