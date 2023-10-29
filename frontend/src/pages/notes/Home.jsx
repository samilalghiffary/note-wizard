import { useState } from 'react';
import Main from './components/Notes';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import { useNotes } from '@/utils/context/Notes';
import writingWizard from '@/assets/writing-wizard.png';
import FloatingButton from '../../components/FloatingButton';
import ModalInput from '../../components/modal/ModalAddNote';
import ModalDetailNote from '../../components/modal/ModalDetailNote';
import ModalAddCollaborator from '../../components/modal/ModalAddCollaborator';

const Home = () => {
  const { notes } = useNotes();
  const [id, setId] = useState();
  const [isAddNote, setIsAddNote] = useState(false);
  const [modalState, setModalState] = useState({
    isDetailModalOpen: false,
    isCollabModalOpen: false,
  });
  const { isCollabModalOpen, isDetailModalOpen } = modalState;

  const onAddNoteHandler = () => {
    setIsAddNote(!isAddNote);
  };

  const onAddNoteClose = () => {
    setIsAddNote(false);
  };

  const onNoteClickHandler = (e) => {
    const id = e.currentTarget.id;
    setId(id);
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: true }));
  };

  const onCloseDetailModalHandler = (e) => {
    e.preventDefault();
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: false }));
  };

  const onCloseCollabModalHandler = (e) => {
    e.preventDefault();
    setModalState((prevState) => ({ ...prevState, isCollabModalOpen: false }));
  };

  const onAddCollaboratorHandler = () => {
    setModalState((prevState) => ({ ...prevState, isCollabModalOpen: true }));
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
      {isDetailModalOpen && (
        <ModalDetailNote
          id={id}
          openDetailModal={isDetailModalOpen}
          closeDetailModal={onCloseDetailModalHandler}
          onAddCollaborator={onAddCollaboratorHandler}
        />
      )}
      {isCollabModalOpen && (
        <ModalAddCollaborator
          id={id}
          openCollabModal={isCollabModalOpen}
          closeCollabModal={onCloseCollabModalHandler}
        />
      )}
      {isAddNote && <ModalInput isAddNote={isAddNote} onAddNoteClose={onAddNoteClose} />}
      <FloatingButton isAddNote={isAddNote} onAddNoteHandler={onAddNoteHandler} />
    </Drawer>
  );
};

export default Home;
