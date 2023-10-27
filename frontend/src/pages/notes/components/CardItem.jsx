const CardItem = ({ id, body, title, date, time, tags, onNoteClick }) => {
  return (
    <div
      id={id}
      onClick={onNoteClick}
      className="card card-compact bg-secondary hover:bg-secondary-focus hover:cursor-pointer transition shadow"
    >
      <div className="card-body">
        <div className="card-title justify-between">
          <h3>{title}</h3>
          <div className="badge badge-error flex items-center">{tags}</div>
        </div>
        <p className="max-h-24 overflow-auto">{body}</p>
        <div className="flex justify-between">
          <h6>{date}</h6>
          <h6>{time}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
