import { Link } from 'react-router-dom';
import { UserGroupIcon, BookOpenIcon, ArchiveBoxIcon, TrashIcon } from '@heroicons/react/24/solid';
import wizardIcon from '@/assets/wizard-icon.png';
import githubIcon from '@/assets/github.png';
import linkedIcon from '@/assets/linkedin.png';

// eslint-disable-next-line react/prop-types
const Drawer = ({ children, currentPage }) => {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side z-10">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu px-4 w-60 h-full bg-secondary-focus">
          <div className="container p-1 gap-2 flex flex-row justify-start items-center">
            <img src={wizardIcon} className="w-12 h-12 rounded" alt="logo" />
            <h3 className="text-xl font-bold align-middle">Note Wizard</h3>
          </div>
          <div className="divider m-0"></div>
          <ul className="menu gap-2">
            <li>
              <Link to="/" className={currentPage === 'notes' ? 'focus' : ''}>
                <BookOpenIcon className="h-6 w-6" />
                My notes
              </Link>
            </li>
            <li>
              <Link to="/collaboration" className={currentPage === 'collaboration' ? 'focus' : ''}>
                <UserGroupIcon className="h-6 w-6" />
                Collabs
              </Link>
            </li>
            <li>
              <Link to="/archive" className={currentPage === 'archive' ? 'focus' : ''}>
                <ArchiveBoxIcon className="h-6 w-6" />
                Archive
              </Link>
            </li>
            <li>
              <Link to="/trash" className={currentPage === 'trash' ? 'focus' : ''}>
                <TrashIcon className="h-6 w-6" />
                Trash
              </Link>
            </li>
          </ul>
          <div className="divider m-0"></div>
          <div className="flex flex-1 justify-end flex-col gap-2">
            <div className="flex gap-2">
              <a href="https://github.com/samilalghiffary" rel="noreferrer" target="_blank">
                <img src={githubIcon} className="w-6 h-6" alt="instagram icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/samil-alghiffary-azis/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedIcon} className="w-6 h-6" alt="linkedin icon" />
              </a>
            </div>
            <p className="text-xs">&copy; Copyright 2023, Samil Al-ghiffary Azis</p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
