import CardItem from './CardItem';

const CardList = ({ notes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {notes.map((note, index) => (
        <CardItem
          key={index}
          tags={note.tags}
          body={note.body}
          date={note.date}
          time={note.time}
          title={note.title}
        />
      ))}
    </div>
  );
};

export default CardList;
