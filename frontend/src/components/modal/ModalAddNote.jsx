import OpenAI from 'openai';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

const ModalAddNote = ({ openModal, closeModal, addNote, isLoading }) => {
  const [generateResume, setGenerateResume] = useState(false);
  const {
    watch,
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const generatingResume = async (prompt) => {
    try {
      const response = await openai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content:
              'Anda adalah pembuat rangkuman, anda akan diberikan catatan dan tugas anda adalah merangkum catatan tersebut dengan singkat, padat dan jelas',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        model: 'gpt-3.5-turbo',
      });
      const resume = response.choices[0].message.content;
      setValue('body', resume);
    } catch (error) {
      console.error(error);
    } finally {
      setGenerateResume(false);
    }
  };

  const onGenerateResumeHandler = async () => {
    setGenerateResume(true);
    const prompt = watch('body');
    toast.promise(generatingResume(prompt), {
      loading: 'Generating resume',
      success: 'Successfully generating resume',
      error: 'Error occurs when generating resume, please try again',
    });
  };

  return (
    <>
      <dialog id="input-modal" className={`modal ${openModal ? 'modal-open' : ''}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add note</h3>
          <form onSubmit={handleSubmit(addNote)} className="flex flex-col gap-1">
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
            <div className="flex justify-between">
              <div onClick={onGenerateResumeHandler} className="btn btn-neutral btn-sm normal-case">
                {generateResume ? (
                  <span className="loading loading-spinner loading-sm"></span>
                ) : (
                  'Generate resume'
                )}
              </div>
              <div className="flex gap-1">
                <button type="submit" className="btn btn-sm btn-neutral w-20 normal-case">
                  {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : (
                    'Submit'
                  )}
                </button>
                <div
                  onClick={closeModal}
                  className="btn btn-sm btn-outline btn-neutral w-20 normal-case"
                >
                  Cancel
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default ModalAddNote;
