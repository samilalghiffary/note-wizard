import { useState } from 'react';
import notes from '@/utils/notes';
import Main from './components/Main';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import ModalInput from './components/ModalInput';
import FloatingButton from './components/FloatingButton';
import writingWizard from '@/assets/writing-wizard.png';

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
        heading="Notes"
        emptyNoteImage={writingWizard}
        paragraph=" Your notes are currently empty. You may want to consider adding a new note.
      </p>"
        notes={notes}
      />
      {isAddNote ? <ModalInput isAddNote={isAddNote} onAddNoteClose={onAddNoteClose} /> : null}
      <FloatingButton isAddNote={isAddNote} onAddNoteHandler={onAddNoteHandler} />
    </Drawer>
  );
};

export default Home;
