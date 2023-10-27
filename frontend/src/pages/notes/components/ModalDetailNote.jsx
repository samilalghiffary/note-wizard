import getNotes from '@/utils/notes';
import { useEffect, useState } from 'react';
import { BsArchiveFill, BsFillTrashFill, BsPersonFillAdd } from 'react-icons/bs';

const ModalDetailNote = ({ onOpenModal, onCloseModal, id }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const notes = getNotes();

  useEffect(() => {
    const filteredNote = notes.filter((x) => x.id === id);
    const title1 = filteredNote[0].title;
    const body1 = filteredNote[0].body;

    setTitle(title1);
    setBody(body1);
  }, []);

  return (
    <dialog id={`note`} className={`modal ${onOpenModal ? 'modal-open' : ''}`}>
      <div className="card w-11/12 lg:w-96 max-h-96 card-compact bg-secondary">
        <div className="card-body">
          <div className="card-title justify-between">
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              value={title}
              className="bg-secondary text-lg focus:outline-none"
            />
            <div className="badge badge-error"></div>
          </div>
          <textarea
            onChange={(e) => setBody(e.target.value)}
            className="textarea text-lg h-28 p-0 bg-secondary rounded-none focus:outline-none resize-none"
            value={body}
          ></textarea>
          <div className="flex justify-between">
            <h6>12-12-2019</h6>
            <h6>09:09 PM</h6>
          </div>
          <div className="flex items-center justify-between">
            <div className="gap-1 flex">
              <button className="btn btn-circle btn-ghost btn-sm">
                <BsPersonFillAdd className="w-5 h-5 cursor-pointer rounded" />
              </button>
              <button className="btn btn-circle btn-ghost btn-sm">
                <BsArchiveFill className="w-5 h-5 cursor-pointer" />
              </button>
              <button className="btn btn-circle btn-ghost btn-sm">
                <BsFillTrashFill className="w-5 h-5 cursor-pointer" />
              </button>
            </div>
            <div className="gap-2 flex">
              <button className="btn btn-primary btn-sm">Submit</button>
              <button onClick={onCloseModal} className="btn btn-primary btn-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ModalDetailNote;
