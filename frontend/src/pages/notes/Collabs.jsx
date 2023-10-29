import Main from './components/Notes';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import collabWizard from '@/assets/collab-wizard.png';
import { useNotes } from '@/utils/context/Notes';

const Collaboration = () => {
  const { notes } = useNotes();

  return (
    <Drawer currentPage="collaboration">
      <NavBar />
      <Main
        emptyNoteImage={collabWizard}
        paragraph="Your collaboration notes are currently empty. You may want to consider adding a new collaborator or request to collaborating."
        heading="Collaboration notes"
        notes={notes}
      />
    </Drawer>
  );
};

export default Collaboration;
