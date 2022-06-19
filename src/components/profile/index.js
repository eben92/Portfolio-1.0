import Me from "../../assets/eben1.svg";

const Profile = () => {
  return (
    <div className='w-full flex items-center justify-end'>
      <img
        src={Me}
        alt=''
        className='hover:shadow-lg rounded-full transition cursor-pointer '
      />
    </div>
  );
};

export default Profile;
