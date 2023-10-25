import MainPanel from './components/MainPanel';

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <MainPanel isLogin={false} />
    </div>
  );
};

export default Register;
