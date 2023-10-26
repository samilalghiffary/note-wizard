import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/solid';

const savedTheme = localStorage.getItem('theme') || 'halloween';

const NavBar = () => {
  const [theme, setTheme] = useState(savedTheme);

  const onThemeChange = () => {
    setTheme(theme === 'halloween' ? 'pastel' : 'halloween');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');

    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div className="navbar sticky shadow-lg top-0 z-10 bg-secondary">
      <div className="container flex flex-row">
        <div className="basis-1/5 lg:basis-2/6">
          <label htmlFor="my-drawer" className="btn btn-sm md:btn-md btn-circle btn-ghost">
            <Bars3Icon className="w-8 h-8" />
          </label>
        </div>

        <div className="basis-2/5 lg:basis-2/6">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search note"
              className="input input-md input-bordered w-full"
            />
          </div>
        </div>

        <div className="basis-2/5 lg:basis-2/6 flex gap-2 justify-end">
          <button onClick={onThemeChange} className="btn hidden md:block btn-circle btn-ghost">
            <label
              className={`w-full h-full swap swap-rotate ${
                theme === 'halloween' ? 'swap-active' : ''
              } `}
            >
              <SunIcon className="swap-on fill-current w-7 h-7" />
              <MoonIcon className="swap-off fill-current w-7 h-7" />
            </label>
          </button>

          <div className="dropdown dropdown-end">
            <div className="container flex items-center gap-1 md:gap-2">
              <p className="text-sm md:text-base font-medium block">Samil</p>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://api.dicebear.com/7.x/bottts-neutral/svg?seed=Buster" />
                </div>
              </label>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
            >
              <li className="md:hidden">
                <button onClick={onThemeChange} className="normal-case">
                  Change theme
                </button>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
