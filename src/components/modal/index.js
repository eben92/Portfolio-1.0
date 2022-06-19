import { useState, useEffect } from "react";
import Me from "../../assets/eben1.svg";
const Modal = ({ showModal, setShowModal }) => {
  const [inputField, setInputField] = useState({
    email: "",
    message: "",
  });

  useEffect(() => {
    console.log(inputField);
  }, [inputField]);

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {showModal && (
        <div
          class='min-w-screen h-screen animated fadeIn faster px-5 md:px-0  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover'
          // style=''
          id='modal-id'
        >
          <div
            x-show={showModal}
            onClick={() => setShowModal(!showModal)}
            class='absolute transition-colors  ease-in duration-1000 bg-black  backdrop-blur opacity-70 inset-0 z-0'
          ></div>
          <div className='w-full   max-w-[20rem] relative mx-auto my-auto rounded-2xl shadow-lg  bg-white '>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-center absolute top-[-30px] right-0 left-0 '>
                <img
                  src={Me}
                  alt=''
                  className='w-[60px] h-[60px] rounded-full bg-white'
                />
              </div>

              <form className='w-full'>
                <div className='mt-8 mb-4 flex relative flex-col gap-2'>
                  <p className='font-[500] text-center '>Tell me something.</p>

                  <div className='w-full px-5'>
                    <input
                      type='email'
                      name='email'
                      onChange={handleChange}
                      required
                      placeholder='Email'
                      value={inputField.email}
                      className='borderborder-[#cacaca] focus:border-none outline-none  md:text-sm mb-2 bg-[#e6e6e6] w-full px-3 py-1 rounded'
                    />
                    <textarea
                      name='message'
                      type='text'
                      placeholder='Message'
                      className='border bg-[#e6e6e6] focus:border-none outline-none  md:text-sm  w-full px-3 py-1 rounded'
                      required
                      onChange={handleChange}
                      value={inputField.message}
                    />
                  </div>
                </div>
                {inputField.message && inputField.email && (
                  <button className='bg-blue-600 hover:bg-blue-700 transition rounded-b-2xl py-3  bottom-0 font-[600] text-white w-full'>
                    SEND
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
