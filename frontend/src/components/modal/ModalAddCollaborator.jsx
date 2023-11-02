import { useNotes } from '@/utils/context/Notes';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ModalAddCollaborator = ({ openModal, closeModal, id }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const { addCollaborator, getUserId } = useNotes();

  const onAddCollaboratorHandler = async (data) => {
    setValue('noteId', id);
    const { username, noteId } = data;
    console.log(username, noteId);
    try {
      const user = await getUserId(username);
      const userId = user.id;
      const respone = await addCollaborator(noteId, userId);
      toast.success(respone);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <dialog className={`modal ${openModal ? 'modal-open' : ''}`}>
        <div className="modal-box w-96">
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
                } w-full `}
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
              <button className="btn btn-sm btn-neutral normal-case">Add Collaboration</button>
              <button
                onClick={closeModal}
                className="btn btn-sm btn-neutral btn-outline normal-case"
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
