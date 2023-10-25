import notes from '@/utils/notes';
import Main from './components/Main';
import Drawer from '@/components/Drawer';
import NavBar from '@/components/NavBar';
import collabWizard from '@/assets/collab-wizard.png';

const Collaboration = () => {
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
