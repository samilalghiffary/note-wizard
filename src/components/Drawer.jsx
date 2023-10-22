import { Link } from 'react-router-dom';
import wizardIcon from '@/assets/wizard-icon.png';
import { UserGroupIcon, BookOpenIcon, ArchiveBoxIcon, TrashIcon } from '@heroicons/react/24/solid';

// eslint-disable-next-line react/prop-types
const Drawer = ({ children, currentPage }) => {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <div className="drawer-side bg-secondary-focus">
        <div className="container p-1 gap-2 flex flex-row justify-center items-center">
          <img src={wizardIcon} className="w-12 h-12 rounded" alt="logo" />
          <h3 className="text-xl font-bold align-middle">Note Wizard</h3>
        </div>
        <div className="divider mt-0"></div>
        <ul className="menu gap-2 px-4 w-60 bg-secondary-focus">
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
          <div className="divider"></div>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
