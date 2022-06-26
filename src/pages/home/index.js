import { useState } from "react";
import {
  About,
  Languages,
  Profile,
  Projects,
  Tabs,
  Login,
  Modal,
} from "../../components";

const Home = () => {
  const [activeTab, setActiveTab] = useState("Projects");
  const [showModal, setShowModal] = useState(false);

  const [inputField, setInputField] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const tabs = ["Projects", "More"];
  return (
    <div>
      <div className='flex flex-col gap-10 '>
        <div className='flex flex-col md:flex-row md:justify-center gap-5 px-5  md:gap-28 mt-16 lg:px-[200px]'>
          <Profile setShowModal={setShowModal} />
          <About setActiveTab={setActiveTab} setShowModal={setShowModal} />
        </div>

        {/* languages */}
        <div className=' whitespace-nowrap lg:px-[200px]'>
          <Languages />
        </div>

        {/* tabs ::: projects
         */}
        <div className='mb-10'>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <div className=''>{activeTab === "Projects" && <Projects />}</div>
        </div>
      </div>

      {/* contact me */}
      <>
        <Modal showModal={showModal} setShowModal={setShowModal}>
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
        </Modal>
      </>
    </div>
  );
};

export default Home;
