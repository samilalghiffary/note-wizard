import { useState } from 'react';
import Notes from './components/Notes';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import { useNotes } from '@/utils/context/Notes';
import writingWizard from '@/assets/writing-wizard.png';
import FloatingButton from '../../components/FloatingButton';
import ModalAddNote from '../../components/modal/ModalAddNote';
import ModalDetailNote from '../../components/modal/ModalDetailNote';
import ModalAddCollaborator from '../../components/modal/ModalAddCollaborator';

const Home = () => {
  const { notes } = useNotes();
  const [id, setId] = useState();
  const [modalState, setModalState] = useState({
    isAddNoteModalOpen: false,
    isDetailModalOpen: false,
    isCollabModalOpen: false,
  });
  const { isCollabModalOpen, isDetailModalOpen, isAddNoteModalOpen } = modalState;

  const openAddNoteModal = () => {
    setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: true }));
  };

  const closeAddNoteModal = () => {
    setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: false }));
  };

  const addNoteHandler = (data) => {
    console.log(data);
  };

  const onNoteClickHandler = (e) => {
    const id = e.currentTarget.id;
    setId(id);
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: true }));
  };

  const closeDetailModal = (e) => {
    e.preventDefault();
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: false }));
  };

  const onCloseCollabModalHandler = (e) => {
    e.preventDefault();
    setModalState((prevState) => ({ ...prevState, isCollabModalOpen: false }));
  };

  const openCollaboratorModal = () => {
    setModalState((prevState) => ({ ...prevState, isCollabModalOpen: true }));
  };

  return (
    <Drawer currentPage="notes">
      <NavBar />
      <Notes
        notes={notes}
        heading="Notes"
        onNoteClick={onNoteClickHandler}
        emptyNoteImage={writingWizard}
        paragraph="Your notes are currently empty. You may want to consider adding a new note."
      />
      {isDetailModalOpen && (
        <ModalDetailNote
          id={id}
          openModal={isDetailModalOpen}
          closeModal={closeDetailModal}
          openCollaboratorModal={openCollaboratorModal}
        />
      )}
      {isCollabModalOpen && (
        <ModalAddCollaborator
          id={id}
          openModal={isCollabModalOpen}
          closeModal={onCloseCollabModalHandler}
        />
      )}
      {isAddNoteModalOpen && (
        <ModalAddNote
          addNote={addNoteHandler}
          openModal={isAddNoteModalOpen}
          closeModal={closeAddNoteModal}
        />
      )}
      <FloatingButton isAddNote={isAddNoteModalOpen} openAddNoteModal={openAddNoteModal} />
    </Drawer>
  );
};

export default Home;
