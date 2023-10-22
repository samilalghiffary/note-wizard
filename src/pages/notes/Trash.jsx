import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';

const Trash = () => {
  return (
    <Drawer currentPage="trash">
      <NavBar />
      <div className="container p-5">
        <h1 className="text-3xl">Hello sam</h1>
        <p>Trash goes here!</p>
      </div>
    </Drawer>
  );
};

export default Trash;
