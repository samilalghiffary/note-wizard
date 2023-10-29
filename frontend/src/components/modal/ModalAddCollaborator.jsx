import { useNotes } from '@/utils/context/Notes';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const ModalAddCollaborator = ({ openCollabModal, closeCollabModal, id }) => {
  const { register, handleSubmit, setValue } = useForm();
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
      <dialog className={`modal bg-secondary ${openCollabModal ? 'modal-open' : ''}`}>
        <div className="modal-box bg-secondary">
          <h3 className="font-bold text-lg">Add collaborator</h3>
          <form onSubmit={handleSubmit(onAddCollaboratorHandler)}>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Type username user you want to collaborating"
                className="input input-md input-bordered w-full bg-inherit"
                {...register('userId', { required: 'Username is required' })}
              />
              <input
                type="text"
                placeholder="Type username user you want to collaborating"
                className="hidden"
                {...register('noteId')}
              />
            </div>
            <div className="modal-action">
              <button className="btn btn-sm btn-primary normal-case">Add Collaboration</button>
              <button
                onClick={closeCollabModal}
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
