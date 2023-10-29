import CardItem from './CardItem';

const CardList = ({ notes, onNoteClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note, index) => (
        <CardItem
          key={index}
          id={note.id}
          body={note.body}
          date={note.createdAt}
          time={note.createdAt}
          title={note.title}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  );
};

export default CardList;
