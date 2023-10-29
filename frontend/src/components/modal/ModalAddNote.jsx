import { useForm } from 'react-hook-form';

const ModalAddNote = ({ openModal, closeModal, addNote }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <dialog id="input-modal" className={`modal ${openModal ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add note</h3>
          <form onSubmit={handleSubmit(addNote)} className="flex flex-col gap-2">
            <div className="form-control w-full">
              <label className="label">
                <span className={`label-text ${errors.title ? 'text-error' : ''}`}>Title</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                {...register('title', { required: 'Title is required' })}
                className={`input input-bordered w-full ${errors.title ? 'input-error' : ''}`}
              />
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.title ? errors.title.message : ''}
                </span>
              </label>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className={`label-text ${errors.body ? 'text-error' : ''}`}>Body</span>
              </label>
              <textarea
                placeholder="Type here"
                {...register('body', { required: 'Body is required' })}
                className={`textarea textarea-md text-md h-32 textarea-bordered ${
                  errors.body ? 'textarea-error' : ''
                }`}
              ></textarea>
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.body ? errors.body.message : ''}
                </span>
              </label>
            </div>
            <div className="modal-action">
              <button type="submit" className="btn btn-sm btn-secondary w-20">
                Submit
              </button>
              <button
                type="reset"
                onClick={closeModal}
                className="btn btn-sm btn-outline btn-secondary w-20"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalAddNote;
