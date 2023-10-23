import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/solid';

const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'halloween'
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme('halloween');
    } else {
      setTheme('pastel');
    }
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    const localTheme = localStorage.getItem('theme');

    document.querySelector('html').setAttribute('data-theme', localTheme);
  }, [theme]);

  return (
    <div className="navbar bg-secondary">
      <div className="container flex flex-row">
        <div className="basis-2/6">
          <label htmlFor="my-drawer" className="btn btn-circle btn-ghost">
            <Bars3Icon className="w-8 h-8" />
          </label>
        </div>

        <div className="basis-2/6">
          <div className="form-control">
            <input type="text" placeholder="Search note" className="input input-bordered w-full" />
          </div>
        </div>

        <div className="basis-2/6 flex gap-2 justify-end">
          <button className="btn btn-circle btn-ghost">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === 'pastel' ? false : true}
              />
              <SunIcon className="swap-on fill-current w-6 h-6" />
              <MoonIcon className="swap-off fill-current w-6 h-6" />
            </label>
          </button>

          <div className="dropdown dropdown-end">
            <div className="container flex items-center gap-2">
              <p className="text-base font-medium">Hello, sam</p>
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
