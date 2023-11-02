import { useToken } from './Token';
import axiosWithConfig from '../api/axiosWithConfig';
import { createContext, useContext, useEffect, useState } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const { accessToken } = useToken();
  const [notes, setNotes] = useState(null);

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

  const addNote = (title, body) => {
    return new Promise(async (resolve, reject) => {
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
        resolve('Added note successfully');
        const noteId = response.data.data.noteId;
        const newNote = await getNoteById(noteId);
        setNotes((prevNotes) => [...prevNotes, newNote]);
      } catch (error) {
        reject('Failed to adding note');
        console.error('Gagal menambahkan catatan', error);
      }
    });
  };

  const deleteNote = (noteId) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axiosWithConfig.delete(`/notes/${noteId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        resolve('Delete note successfully');
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== noteId));
      } catch (error) {
        reject(error.response.data.message);
      }
    });
  };

  const editNote = (noteId, title, body) => {
    return new Promise(async (resolve, reject) => {
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
        resolve('Edit note successfully');
        const updatedNotes = notes.map((note) =>
          note.id === noteId ? { ...note, title, body } : note
        );
        setNotes(updatedNotes);
      } catch (error) {
        reject('Failed to edit note');
        console.error('Gagal mengubah catatan', error);
      }
    });
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
    }
  };

  const addCollaborator = async (noteId, userId) => {
    return new Promise(async (resolve, reject) => {
      try {
        await axiosWithConfig.post(
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
        resolve('Collaboration added successfully');
      } catch (error) {
        reject('Failed adding collaboration');
        console.error(error);
      }
    });
  };

  const getUserId = (username) => {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await axiosWithConfig.get('/users', {
          params: {
            username,
          },
        });
        const user = response.data.data.users[0];
        if (user.length === 0) {
          reject(new Error('Username not found'));
        } else {
          resolve(user);
        }
      } catch (error) {
        reject(error);
      }
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        addNote,
        editNote,
        getUserId,
        deleteNote,
        getNoteById,
        addCollaborator,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  return useContext(NotesContext);
};
