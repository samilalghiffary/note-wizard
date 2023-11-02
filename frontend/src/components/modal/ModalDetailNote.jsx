import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useNotes } from '@/utils/context/Notes';
import SkeletonCardDetail from '../skeleton/SkeletonCardDetail';
import { formatISODate, formatISOTime } from '@/utils/dateFormatter';
import { BsArchiveFill, BsFillTrashFill, BsPersonFillAdd } from 'react-icons/bs';

const ModalDetailNote = ({
  id,
  editNote,
  openModal,
  closeModal,
  deleteNote,
  openCollaboratorModal,
}) => {
  const { getNoteById } = useNotes();
  const { register, setValue, handleSubmit } = useForm();
  const [detailNote, setDetailNote] = useState({
    date: '',
    time: '',
    owner: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const { date, time, owner } = detailNote;

  useEffect(() => {
    const getDetailNote = async () => {
      setIsLoading(true);
      try {
        const note = await getNoteById(id);
        setValue('title', note.title);
        setValue('body', note.body);
        setDetailNote({
          ...detailNote,
          owner: note.username,
          date: formatISODate(note.updatedAt),
          time: formatISOTime(note.updatedAt),
        });
      } catch (error) {
        toast.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getDetailNote();
  }, []);

  return (
    <>
      <dialog className={`modal ${openModal ? 'modal-open' : ''}`}>
        <div className="card w-11/12 lg:w-2/4 card-compact bg-primary">
          <form onSubmit={handleSubmit(editNote)}>
            {isLoading ? (
              <SkeletonCardDetail />
            ) : (
              <div className="card-body flex flex-col items-stretch h-full">
                <div id={id} className="card-title justify-between">
                  <input
                    {...register('title')}
                    type="text"
                    className="bg-primary text-lg focus:outline-none"
                  />
                </div>
                <textarea
                  spellCheck={false}
                  autoFocus
                  className="textarea text-lg h-52 p-0 bg-primary rounded-none focus:outline-none resize-none"
                  {...register('body')}
                ></textarea>
                <div className="flex">
                  <p className="text-xs">Created by {owner}</p>
                  <p className="text-xs text-end">
                    Edited {date} {time}
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
                        className="tooltip tooltip-bottom normal-case tooltip-accent"
                        data-tip="Add collaborator"
                      >
                        <BsPersonFillAdd className="w-5 h-5 cursor-pointer rounded" />
                      </div>
                    </div>
                    <div className="btn btn-circle btn-ghost btn-sm">
                      <div
                        className="tooltip tooltip-bottom normal-case tooltip-accent"
                        data-tip="Archive note"
                      >
                        <BsArchiveFill className="w-5 h-5 cursor-pointer" />
                      </div>
                    </div>
                    <div id={id} onClick={deleteNote} className="btn btn-circle btn-ghost btn-sm">
                      <div
                        className="tooltip tooltip-bottom normal-case tooltip-accent"
                        data-tip="Delete note"
                      >
                        <BsFillTrashFill className="w-5 h-5 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                  <div className="gap-2 flex">
                    <button className="btn btn-neutral btn-sm normal-case">Submit</button>
                    <button
                      onClick={closeModal}
                      className="btn btn-neutral btn-outline btn-sm normal-case"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalDetailNote;
