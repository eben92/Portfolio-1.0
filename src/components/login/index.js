import { useState, useEffect } from "react";
import Me from "../../assets/eben1.svg";
import { Modal } from "../../components";
const Login = ({ showModal, setShowModal }) => {
  const [inputField, setInputField] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    console.log(inputField);
  }, [inputField]);

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <form className='w-full'>
        <div className='mt-8 mb-4 flex relative flex-col gap-2'>
          <p className='font-[500] mt-3 text-center text-xl '>SIGN IN </p>

          <div className='w-full px-5'>
            <input
              type='text'
              name='username'
              onChange={handleChange}
              required
              placeholder='username'
              value={inputField.username}
              className='borderborder-[#cacaca] focus:border-none outline-none  md:text-sm mb-2 bg-[#e6e6e6] w-full px-3 py-1 rounded'
            />
            <input
              type='password'
              name='password'
              onChange={handleChange}
              required
              placeholder='password'
              value={inputField.password}
              className='borderborder-[#cacaca] focus:border-none outline-none  md:text-sm mb-2 bg-[#e6e6e6] w-full px-3 py-1 rounded'
            />
          </div>
        </div>
        {inputField.password && inputField.username && (
          <button
            onClick={handleSignIn}
            className='bg-blue-600 hover:bg-blue-700 transition rounded-b-2xl py-3  bottom-0 font-[600] text-white w-full'
          >
            SIGN IN
          </button>
        )}
      </form>
    </Modal>
  );
};

export default Login;
