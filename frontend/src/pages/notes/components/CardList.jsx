import CardItem from './CardItem';

const CardList = ({ notes, onNoteClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note) => (
        <CardItem
          key={note.id}
          id={note.id}
          tags={note.tags}
          body={note.body}
          date={note.date}
          time={note.time}
          title={note.title}
          onNoteClick={onNoteClick}
        />
      ))}
    </div>
  );
};

export default CardList;
