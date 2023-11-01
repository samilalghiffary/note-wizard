import { useState } from 'react';
import Notes from './components/Notes';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import { useNotes } from '@/utils/context/Notes';
import toast, { Toaster } from 'react-hot-toast';
import writingWizard from '@/assets/writing-wizard.png';
import FloatingButton from '../../components/FloatingButton';
import ModalAddNote from '../../components/modal/ModalAddNote';
import ModalDetailNote from '../../components/modal/ModalDetailNote';
import ModalAddCollaborator from '../../components/modal/ModalAddCollaborator';

const Home = () => {
  const [id, setId] = useState();
  const [keyword, setKeyword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { notes, addNote, editNote, deleteNote } = useNotes();
  const [modalState, setModalState] = useState({
    isAddNoteModalOpen: false,
    isDetailModalOpen: false,
    isCollabModalOpen: false,
  });
  const { isCollabModalOpen, isDetailModalOpen, isAddNoteModalOpen } = modalState;

  const onSearchHandler = (keyword) => {
    setKeyword(keyword);
  };

  const filteredNotes = notes
    ? notes.filter((note) => note.title.toLowerCase().includes(keyword.toLowerCase()))
    : null;

  const openDetailModal = (e) => {
    const id = e.currentTarget.id;
    setId(id);
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: true }));
  };

  const openAddNoteModal = () => {
    setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: true }));
  };

  const closeAddNoteModal = () => {
    setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: false }));
  };

  const addNoteHandler = async (data) => {
    setIsLoading(true);
    const { title, body } = data;

    let message;
    try {
      message = await addNote(title, body);
      toast.success(message);
    } catch (error) {
      console.error(error);
      toast.error(message);
    } finally {
      setModalState((prevState) => ({ ...prevState, isAddNoteModalOpen: false }));
      setIsLoading(false);
    }
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
    try {
      let message = await deleteNote(id);
      toast.success(message);
    } catch (error) {
      let errorMessage = 'Anda tidak berhak mengakses resource ini';
      if (error === errorMessage) {
        errorMessage = 'You cannot delete collaborated note';
      }
      toast.error(errorMessage);
    }
    setModalState((prevState) => ({ ...prevState, isDetailModalOpen: false }));
  };

  return (
    <Drawer currentPage="notes">
      <NavBar searchNote={onSearchHandler} />
      <Notes
        notes={filteredNotes}
        heading="Notes"
        emptyNoteImage={writingWizard}
        openModal={openDetailModal}
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
          isLoading={isLoading}
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
