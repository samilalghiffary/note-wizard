import { formatISODate, formatISOTime } from '@/utils/dateFormatter';

const CardItem = ({ id, body, title, date, time, openModal }) => {
  return (
    <div className="card card-compact bg-primary hover:bg-primary-focus transition shadow">
      <div className="card-body h-52 gap-3">
        <div className="card-title justify-between">
          <h3>{title}</h3>
          <button id={id} onClick={openModal} className="btn btn-accent btn-xs normal-case">
            Edit
          </button>
        </div>
        <p className="max-h-24 overflow-auto">{body}</p>
        <div className="flex justify-between">
          <h6>{formatISODate(date)}</h6>
          <h6>{formatISOTime(time)}</h6>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
