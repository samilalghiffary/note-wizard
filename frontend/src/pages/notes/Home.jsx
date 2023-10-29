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
import toast, { Toaster } from 'react-hot-toast';

const Home = () => {
  const [id, setId] = useState();
  const { notes, addNote, editNote, deleteNote } = useNotes();
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

  const addNoteHandler = async (data) => {
    const { title, body } = data;

    let message;
    try {
      message = await addNote(title, body);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error(message);
    }
    setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: false }));
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

  const editNoteHandler = async (data) => {
    const { title, body } = data;

    let message;
    try {
      message = await editNote(id, title, body);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error(message);
    }
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: false }));
  };

  const deleteNoteHandler = async () => {
    let message;
    try {
      message = await deleteNote(id);
      toast.success(message);
    } catch (error) {
      toast.error(message);
    }
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: false }));
  };

  return (
    <Drawer currentPage="notes">
      <NavBar />
      <Notes
        notes={notes}
        heading="Notes"
        emptyNoteImage={writingWizard}
        onNoteClick={onNoteClickHandler}
        paragraph="Your notes are currently empty. You may want to consider adding a new note."
      />
      {isDetailModalOpen && (
        <ModalDetailNote
          id={id}
          editNote={editNoteHandler}
          openModal={isDetailModalOpen}
          closeModal={closeDetailModal}
          deleteNote={deleteNoteHandler}
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
      <Toaster />
    </Drawer>
  );
};

export default Home;
