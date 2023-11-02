import SkeletonNotes from '@/components/skeleton/SkeletonNotes';
import CardList from './CardList';
import EmptyNote from './EmptyNote';
import { BsFilterLeft, BsSortNumericDownAlt, BsSortNumericUpAlt } from 'react-icons/bs';

const Notes = ({ notes, heading, paragraph, emptyNoteImage, openModal }) => {
  return (
    <>
      {notes === null ? (
        <SkeletonNotes />
      ) : notes.length === 0 ? (
        <EmptyNote emptyNoteImage={emptyNoteImage} paragraph={paragraph} heading={heading} />
      ) : (
        <div className="container min-h-screen flex gap-4 flex-col p-5">
          <div className="flex justify-between">
            <h1 className="text-3xl">{heading}</h1>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost normal-case">
                Sort by
                <BsFilterLeft className="w-6 h-6" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="flex justify-between">
                    Date descending <BsSortNumericDownAlt className="w-6 h-6" />
                  </a>
                </li>
                <li>
                  <a className="flex justify-between">
                    Date ascending <BsSortNumericUpAlt className="w-6 h-6" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <CardList openModal={openModal} notes={notes} />
        </div>
      )}
    </>
  );
};

export default Notes;
