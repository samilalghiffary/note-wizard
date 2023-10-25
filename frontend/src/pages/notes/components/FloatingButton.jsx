import { BsPlusLg, BsXLg } from 'react-icons/bs';

const FloatingButton = ({ isAddNote, onAddNoteHandler }) => {
  return (
    <div className="fixed bottom-4 right-4">
      <button onClick={onAddNoteHandler} className="btn btn-circle btn-secondary w-12 h-12">
        <label className={`swap swap-rotate ${!isAddNote ? 'swap-active' : ''}`}>
          <div className="swap-on">
            <BsPlusLg className="w-6 h-6" />
          </div>
          <div className="swap-off">
            <BsXLg className="w-6 h-6" />
          </div>
        </label>
      </button>
    </div>
  );
};

export default FloatingButton;
