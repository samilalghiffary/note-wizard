import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNotes } from '@/utils/context/Notes';
import { formatISODate, formatISOTime } from '@/utils/dateFormatter';
import { BsArchiveFill, BsFillTrashFill, BsPersonFillAdd } from 'react-icons/bs';

const ModalDetailNote = ({
  id,
  openModal,
  closeModal,
  openCollaboratorModal,
  editNote,
  deleteNote,
}) => {
  const { getNoteById } = useNotes();
  const { register, setValue, handleSubmit } = useForm();
  const [detailNote, setDetailNote] = useState({
    date: '',
    time: '',
    owner: '',
  });
  const { date, time, owner } = detailNote;

  useEffect(() => {
    getNoteById(id)
      .then((note) => {
        setValue('title', note.title);
        setValue('body', note.body);
        setDetailNote({
          ...detailNote,
          owner: note.username,
          date: formatISODate(note.createdAt),
          time: formatISOTime(note.createdAt),
        });
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <dialog className={`modal ${openModal ? 'modal-open' : ''}`}>
        <div className="card w-11/12 lg:w-96 max-h-96 card-compact bg-secondary">
          <form onSubmit={handleSubmit(editNote)}>
            <div className="card-body">
              <div id={id} className="card-title justify-between">
                <input
                  {...register('title')}
                  type="text"
                  className="bg-secondary text-lg focus:outline-none"
                />
              </div>
              <textarea
                autoFocus
                className="textarea text-lg h-28 p-0 bg-secondary rounded-none focus:outline-none resize-none"
                {...register('body')}
              ></textarea>
              <div className="flex">
                <p className="text-xs">Created by {owner}</p>
                <p className="text-xs text-end">
                  {date} {time}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="gap-1 flex">
                  <div
                    id={id}
                    onClick={openCollaboratorModal}
                    className="btn btn-circle btn-ghost btn-sm"
                  >
                    <div
                      className="tooltip tooltip-bottom normal-case tooltip-primary"
                      data-tip="Add collaborator"
                    >
                      <BsPersonFillAdd className="w-5 h-5 cursor-pointer rounded" />
                    </div>
                  </div>
                  <div className="btn btn-circle btn-ghost btn-sm">
                    <div
                      className="tooltip tooltip-bottom normal-case tooltip-primary"
                      data-tip="Archive note"
                    >
                      <BsArchiveFill className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                  <div id={id} onClick={deleteNote} className="btn btn-circle btn-ghost btn-sm">
                    <div
                      className="tooltip tooltip-bottom normal-case tooltip-primary"
                      data-tip="Delete note"
                    >
                      <BsFillTrashFill className="w-5 h-5 cursor-pointer" />
                    </div>
                  </div>
                </div>
                <div className="gap-2 flex">
                  <button className="btn btn-primary btn-sm normal-case">Submit</button>
                  <button
                    onClick={closeModal}
                    className="btn btn-primary btn-outline btn-sm normal-case"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
      ;
    </>
  );
};

export default ModalDetailNote;
