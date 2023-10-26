import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import FormPanel from '../desktop/components/FormPanel';

const MobileAuth = ({ isLogin }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'halloween';
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-base-200">
      <div className="fixed top-0 left-0">
        <Link to="/" className="btn btn-ghost">
          <BsArrowLeft className="w-8 h-8" />
        </Link>
      </div>
      <div className="w-full h-2/3 flex flex-col justify-center items-center">
        <FormPanel isLogin={isLogin} />
      </div>
    </div>
  );
};

export default MobileAuth;
