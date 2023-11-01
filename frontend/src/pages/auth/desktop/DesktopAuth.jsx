import { useEffect } from 'react';
import MainPanel from '../components/MainPanel';

const DesktopAuth = ({ isLogin }) => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'halloween';
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  });

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <MainPanel isLogin={isLogin} />
    </div>
  );
};

export default DesktopAuth;
