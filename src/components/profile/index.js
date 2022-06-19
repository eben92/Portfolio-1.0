import Me from "../../assets/eben1.svg";
import useScreenSize from "../useScreenSize";
import Button from "../button";

const Profile = ({ setActiveTab }) => {
  const dimensions = useScreenSize();

  return (
    <div className='w-full flex flex-row gap-7 md:gap-0  md:flex-col items-center md:justify-end'>
      <img
        src={Me}
        alt=''
        className='hover:shadow-lg rounded-full w-[120px] h-[120px] md:w-[220px] md:h-[220px] transition cursor-pointer '
      />

      {dimensions.width < 768 && (
        <>
          <div className='flex top-[4rem] z-[5px] flex-col  md:justify-end w-full gap-4'>
            {/* <a href='#projects' className='w-full'> */}
            <Button
              name='Projects'
              onClick={() => setActiveTab("Projects")}
              className='w-full'
            />
            {/* </a> */}
            <Button name='Resume' />
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
