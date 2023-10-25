const CardItem = ({ body, title, date, time, tags }) => {
  return (
    <div className="card card-compact bg-secondary hover:bg-secondary-focus transition shadow">
      <div className="card-body">
        <div className="card-title justify-between">
          <h3>{title}</h3>
          <div className="badge badge-error flex items-center">{tags}</div>
        </div>
        <p>{body}</p>
        <div className="flex justify-between">
          <h6>{date}</h6>
          <h6>{time}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
