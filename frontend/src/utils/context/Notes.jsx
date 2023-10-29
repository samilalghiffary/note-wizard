import { useToken } from './Token';
import axiosWithConfig from '../api/axiosWithConfig';
import { createContext, useContext, useEffect, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const { accessToken } = useToken();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes(accessToken, setNotes);
  }, [accessToken]);

  const getNotes = async (accessToken, setNotes) => {
    try {
      const response = await axiosWithConfig.get('/notes', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setNotes(response.data.data.notes);
    } catch (error) {
      console.error(error);
    }
  };

  const addNote = async (title, body) => {
    try {
      const response = await axiosWithConfig.post(
        '/notes',
        {
          title,
          body,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const noteId = response.data.data.noteId;
      const newNote = await getNoteById(noteId);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    } catch (error) {
      console.error('Gagal menambahkan catatan', error);
    }
  };

  const deleteNote = async (noteId) => {
    try {
      await axiosWithConfig.delete(`/notes/${noteId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
    } catch (error) {
      console.error('Gagal menghapus catatan', error);
    }
  };

  const editNote = async (noteId, title, body) => {
    try {
      await axiosWithConfig.put(
        `/notes/${noteId}`,
        { title, body },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const updatedNotes = notes.map((note) =>
        note.id === noteId ? { ...note, title, body } : note
      );
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Gagal mengubah catatan', error);
    }
  };

  const getNoteById = async (id) => {
    try {
      const response = await axiosWithConfig.get(`/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const note = response.data.data.note;
      return note;
    } catch (error) {
      console.error('Gagal mengambil detail catatan', error);
      throw error;
    }
  };

  const addCollaborator = async (noteId, userId) => {
    try {
      const response = await axiosWithConfig.post(
        '/collaborations',
        {
          noteId,
          userId,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <NotesContext.Provider
      value={{ notes, getNotes, addNote, deleteNote, editNote, getNoteById, addCollaborator }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
