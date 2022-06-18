import propTypes from "prop-types";

const Tabs = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className='border-t-2 flex items-center justify-center gap-8 '>
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => setActiveTab(tab)}
          className={
            activeTab === tab
              ? "border-t-2 border-black pt-2 font-[600]"
              : `cursor-pointer font-[400] pt-2`
          }
        >
          <span className=' text-inherit text-base'>{tab}</span>
        </div>
      ))}
    </div>
  );
};

Tabs.propTypes = {
  activeTab: propTypes.string.isRequired,
  setActiveTab: propTypes.func.isRequired,
  tabs: propTypes.array.isRequired,
};

export default Tabs;
