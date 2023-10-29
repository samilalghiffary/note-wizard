import { BsPlusLg, BsXLg } from 'react-icons/bs';

const FloatingButton = ({ isAddNote, openAddNoteModal }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button
        onClick={openAddNoteModal}
        className="btn btn-circle btn-secondary shadow-md shadow-secondary-focus w-14 h-14"
      >
        <label className={`swap swap-rotate ${!isAddNote ? 'swap-active' : ''}`}>
          <div className="swap-on">
            <BsPlusLg className="w-8 h-8 " />
          </div>
          <div className="swap-off">
            <BsXLg className="w-8 h-8" />
          </div>
        </label>
      </button>
    </div>
  );
};

export default FloatingButton;
