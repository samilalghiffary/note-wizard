import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';

const Collaboration = () => {
  return (
    <Drawer currentPage="collaboration">
      <NavBar />
      <div className="container p-5">
        <h1 className="text-3xl">Hello sam</h1>
        <p>Collab Notes goes here!</p>
      </div>
    </Drawer>
  );
};

export default Collaboration;
