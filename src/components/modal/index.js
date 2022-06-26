import { useState, useEffect } from "react";
import Me from "../../assets/eben1.svg";
const Modal = ({ showModal, setShowModal, children }) => {
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
              {children}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
