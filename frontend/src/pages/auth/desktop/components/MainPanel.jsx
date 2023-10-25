import FormPanel from './FormPanel';
import SidePanel from './SidePanel';

const MainPanel = ({ isLogin }) => {
  return (
    <div className="w-7/12 h-5/6 flex bg-base-200 rounded-2xl">
      <SidePanel />
      <FormPanel isLogin={isLogin} />
    </div>
  );
};

export default MainPanel;
