import { useNotes } from '@/utils/context/Notes';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ModalAddCollaborator = ({ openModal, closeModal, id }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { addCollaborator } = useNotes();

  useEffect(() => {
    setValue('noteId', id);
  }, [id]);

  const onAddCollaboratorHandler = (data) => {
    const { noteId, userId } = data;
    addCollaborator(noteId, userId);
  };

  return (
    <div>
      <dialog className={`modal bg-secondary ${openModal ? 'modal-open' : ''}`}>
        <div className="modal-box w-80 bg-secondary">
          <h3 className="font-bold text-lg">Add collaborator</h3>
          <form onSubmit={handleSubmit(onAddCollaboratorHandler)}>
            <div className="form-control w-full">
              <label className="label">
                <span className={`label-text ${errors.username ? 'text-error' : ''}`}>
                  Username
                </span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className={`input input-md input-bordered ${
                  errors.username ? 'input-error' : ''
                } w-full bg-inherit `}
                {...register('username', { required: 'Username is required' })}
              />
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.username ? errors.username.message : ''}
                </span>
              </label>
              <input type="text" className="hidden" {...register('noteId')} />
            </div>
            <div className="modal-action">
              <button className="btn btn-sm btn-primary normal-case">Add Collaboration</button>
              <button
                onClick={closeModal}
                className="btn btn-sm btn-primary btn-outline normal-case"
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalAddCollaborator;
