import axiosWithConfig from '../api/axiosWithConfig';
import { createContext, useContext, useState } from 'react';

const CollaborationNotesContext = createContext();

export const CollaborationNotesProvider = ({ children }) => {
  const [collaborationNotes, setCollaborationNote] = useState([]);

  const getCollaborationNotes = async (ownerId, accessToken) => {
    try {
      const response = await axiosWithConfig.get(`/notes/${ownerId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCollaborationNote(response.data.data.notes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CollaborationNotesContext.Provider value={{ collaborationNotes, getCollaborationNotes }}>
      {children}
    </CollaborationNotesContext.Provider>
  );
};

export const useCollaborationNotes = () => {
  return useContext(CollaborationNotesContext);
};
