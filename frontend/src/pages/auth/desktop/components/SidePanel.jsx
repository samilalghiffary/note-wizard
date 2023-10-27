import WizardBook from '@/assets/auth-background.jpeg';

const SidePanel = () => {
  return (
    <div className="basis-7/12 rounded-s-2xl justify-center items-center flex-col flex bg-secondary-focus">
      <img src={WizardBook} className="w-full h-full rounded-s-2xl" alt="" />
    </div>
  );
};

export default SidePanel;
