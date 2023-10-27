const EmptyNote = ({ heading, paragraph, emptyNoteImage }) => {
  return (
    <div className="w-full h-screen gap-3 flex flex-col justify-center items-center">
      <img src={emptyNoteImage} className="w-60 h-60 mask mask-squircle" alt="writing-wizard" />
      <h2 className="text-3xl lg:text-4xl font-semibold text-center">{heading} is empty!</h2>
      <p className="text-center lg:w-2/4">{paragraph}</p>
    </div>
  );
};

export default EmptyNote;
