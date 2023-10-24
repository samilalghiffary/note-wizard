import writingWizard from '@/assets/writing-wizard.png';

const EmptyNote = () => {
  return (
    <div className="w-full h-screen gap-3 flex flex-col justify-center items-center">
      <img src={writingWizard} className="w-60 h-60 mask mask-squircle" alt="writing-wizard" />
      <h2 className="text-4xl font-semibold text-center">Notes is empty!</h2>
      <p className="text-center">
        Your notes are currently empty. You may want to consider adding a new note.
      </p>
    </div>
  );
};

export default EmptyNote;
