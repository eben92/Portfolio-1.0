// import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Button from "../button";
import useScreenSize from "../useScreenSize";
import { MdOutlineCoffeeMaker } from "react-icons/md";

const About = ({ setActiveTab, setShowModal }) => {
  // const { navigate } = useNavigate();
  const dimensions = useScreenSize();

  useEffect(() => {
    console.log(dimensions.width);
  }, [dimensions]);

  return (
    <div className='flex flex-col gap-7  w-full'>
      {/* <div className='flex relative'>
        {/* <h1 className="font-['Source_Code_Pro'] text-[96px] leading-none">
          Hi
        </h1>
        <img
          src={Hi}
          alt=''
          width={30}
          height={30}
          className='absolute right-0 top-[-15px]'
        /> 
      </div> */}

      {dimensions.width > 768 && (
        <div className='flex sticky top-[4rem] z-[5px]   md:justify-end w-full gap-4'>
          {/* <button className='flex flex-col-reverse items-center border border-[#cacaca] rounded py-1 px-2'>
            <MdOutlineCoffeeMaker className='text-red' />
            <p className='text-[10px]'>2.4k cheers</p>
          </button> */}
          {/* <a href='#projects'> */}
          <Button
            name='Contact Me'
            onClick={() => {
              // window.location.href = "/#projects";
              // setActiveTab("Projects");
              setShowModal(true);
            }}
          />
          {/* </a> */}
          <Button name='Resume' />
        </div>
      )}
      <div>
        <div className='flex gap-4 items-center'>
          <h4 className='font-[600] after:border-r-2 after:ml-4 text-xl'>
            Ebenezer Frimpong
          </h4>
          <span className='font-[400] text-base'>Web Developer</span>
        </div>
        <p className="font-['Source_Code_Pro'] text-xs text-[#A3A3A3]">
          Science, Technology & Engineering
        </p>
        <div>
          <p className='font-[400] text-base'>Community Taught Developer</p>
          <p className=' font-[400] flex items-center gap-2 text-base'>
            JS <span> x </span> SCSS <span> x </span> REACTJS <span> x </span>{" "}
            NEXTJS
          </p>
          <p>Tech Enthusiast</p>
          <p>Gamer</p>
        </div>
      </div>
    </div>
  );
};

export default About;
