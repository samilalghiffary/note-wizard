import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import WizardBook from '@/assets/auth-background.jpeg';

const Index = () => {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'halloween';
    document.querySelector('html').setAttribute('data-theme', savedTheme);
  });

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-base-200">
      <div className="w-11/12 flex flex-col items-center mb-9">
        <img
          src={WizardBook}
          className="w-60 h-60 mb-2 mask mask-decagon"
          alt="portal for wizard"
        />
        <h3 className="text-2xl font-semibold">Hello, wizard!</h3>
        <p className="text-md text-center">
          Welcome to notes created by &apos;Wizard&apos; for &apos;Wizard&apos;
        </p>
      </div>
      <div className="w-11/12 flex flex-col gap-3 justify-self-end">
        <Link to="/login" className="btn btn-neutral normal-case">
          Login
        </Link>
        <Link to="/register" className="btn btn-neutral btn-outline normal-case">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Index;
