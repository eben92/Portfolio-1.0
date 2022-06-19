const Footer = () => {
  return (
    <footer className='bg-white sticky text-xs top-0 z-10 w-full border-t border-[#CACACA] py-4 flex items-center justify-center '>
      <span className='after:border-r-2 after:mx-4'>
        {new Date().getFullYear()}
      </span>{" "}
      Ebenezer Frimpong
    </footer>
  );
};

export default Footer;
