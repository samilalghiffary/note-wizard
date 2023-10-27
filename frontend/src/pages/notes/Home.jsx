import { useState } from 'react';

import Main from './components/Main';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import ModalInput from './components/ModalInput';
import writingWizard from '@/assets/writing-wizard.png';
import FloatingButton from './components/FloatingButton';
import ModalDetailNote from './components/ModalDetailNote';
import getNotes from '@/utils/notes';

const notes = getNotes();

const Home = () => {
  const [isAddNote, setIsAddNote] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [id, setId] = useState();

  const onAddNoteHandler = () => {
    setIsAddNote(!isAddNote);
  };

  const onAddNoteClose = () => {
    setIsAddNote(false);
  };

  const onNoteClickHandler = (e) => {
    const id = e.currentTarget.id;
    setId(id);
    setIsModalOpen(true);
  };

  const onCloseModalHandler = () => {
    setIsModalOpen(false);
  };

  return (
    <Drawer currentPage="notes">
      <NavBar />
      <Main
        heading="Notes"
        onNoteClick={onNoteClickHandler}
        emptyNoteImage={writingWizard}
        paragraph="Your notes are currently empty. You may want to consider adding a new note."
        notes={notes}
      />
      {isModalOpen && (
        <ModalDetailNote id={id} onCloseModal={onCloseModalHandler} onOpenModal={isModalOpen} />
      )}
      {isAddNote && <ModalInput isAddNote={isAddNote} onAddNoteClose={onAddNoteClose} />}
      <FloatingButton isAddNote={isAddNote} onAddNoteHandler={onAddNoteHandler} />
    </Drawer>
  );
};

export default Home;
