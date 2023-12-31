import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToken } from '@/utils/context/Token';
import { useTheme } from '@/utils/context/Theme';
import wizardAvatar from '@/assets/wizard-avatar.png';
import { SunIcon, MoonIcon, Bars3Icon } from '@heroicons/react/24/solid';

const NavBar = ({ searchNote }) => {
  const { logout } = useToken();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [searchValue, setSearchValue] = useState('');

  const onLogoutHandler = async () => {
    let message;
    try {
      message = await logout();
      alert(message);
      navigate('/login');
    } catch (error) {
      alert(error);
    }
  };

  const onThemeChange = () => {
    toggleTheme();
  };

  const onSearchHandler = (e) => {
    const keyword = e.target.value;
    setSearchValue(keyword);
    searchNote(keyword);
  };

  return (
    <div className="navbar sticky shadow-lg top-0 z-10 bg-primary">
      <div className="container flex flex-row">
        <div className="basis-1/5 lg:basis-2/6">
          <label htmlFor="my-drawer" className="btn btn-sm md:btn-md btn-circle btn-ghost">
            <Bars3Icon className="w-8 h-8" />
          </label>
        </div>

        <div className="basis-3/5 w-full lg:basis-2/6">
          <div className="form-control">
            <input
              type="text"
              value={searchValue}
              onChange={onSearchHandler}
              placeholder="Search note"
              className="input input-md input-bordered w-full"
            />
          </div>
        </div>

        <div className="basis-1/5 lg:basis-2/6 flex gap-2 justify-end">
          <button onClick={onThemeChange} className="btn hidden md:block btn-circle btn-ghost">
            <label
              className={`w-full h-full swap swap-rotate ${theme === 'dark' ? 'swap-active' : ''} `}
            >
              <SunIcon className="swap-on fill-current w-7 h-7" />
              <MoonIcon className="swap-off fill-current w-7 h-7" />
            </label>
          </button>

          <div className="dropdown dropdown-end">
            <div className="container flex items-center gap-1 md:gap-2">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img className="image-full" src={wizardAvatar} />
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
                <button onClick={onLogoutHandler}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
