import Dropdown from "../../assets/dropdown.svg";

const Header = () => {
  return (
    <nav className='bg-white sticky top-0 z-10 w-full border-b border-[#CACACA] py-4 flex items-center justify-around '>
      <h1 className=" text-2xl text-[#302c2dc5] font-['Pacifico']">
        Ebenezer Frimpong
      </h1>
      <div>
        <img src={Dropdown} alt='' className='' />
      </div>
      {/* <div>social media</div> */}
    </nav>
  );
};

export default Header;
