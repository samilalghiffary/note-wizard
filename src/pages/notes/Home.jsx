import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';

const Home = () => {
  return (
    <Drawer currentPage="notes">
      <NavBar />
      <div className="container p-5">
        <h1 className="text-3xl">Hello sam</h1>
        <p>Notes goes here!</p>
      </div>
    </Drawer>
  );
};

export default Home;
