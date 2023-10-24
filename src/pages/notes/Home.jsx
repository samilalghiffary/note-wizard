import { useState } from 'react';
import Main from './components/Main';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import ModalInput from './components/ModalInput';
import FloatingButton from './components/FloatingButton';
import notes from '@/utils/notes';

const Home = () => {
  const [isAddNote, setIsAddNote] = useState(false);

  const onAddNoteHandler = () => {
    setIsAddNote(!isAddNote);
  };

  const onAddNoteClose = () => {
    setIsAddNote(false);
  };

  return (
    <Drawer currentPage="notes">
      <NavBar />
      <Main
        onAddNoteClose={onAddNoteClose}
        isAddNote={isAddNote}
        onAddNoteHandler={onAddNoteHandler}
        notes={notes}
      />
      {isAddNote ? <ModalInput isAddNote={isAddNote} onAddNoteClose={onAddNoteClose} /> : null}
      <FloatingButton isAddNote={isAddNote} onAddNoteHandler={onAddNoteHandler} />
    </Drawer>
  );
};

export default Home;
