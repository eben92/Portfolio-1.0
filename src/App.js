import { useState } from "react";
import {
  About,
  Footer,
  Header,
  Languages,
  Profile,
  Projects,
  Tabs,
  Cup,
} from "./components";

// import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Projects");

  const tabs = ["Projects", "More"];

  return (
    <div className='App'>
      <>
        <Header />
      </>

      {/* <div className=''>
        <Cup />
      </div> */}
      <div className='flex flex-col gap-10 '>
        <div className='flex flex-col md:flex-row md:justify-center gap-5 px-5  md:gap-28 mt-16 lg:px-[200px]'>
          <Profile />
          <About setActiveTab={setActiveTab} />
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

      <Footer />
    </div>
  );
}

export default App;
