import { useState } from "react";
import {
  About,
  Header,
  Languages,
  Profile,
  Projects,
  Tabs,
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
      <div className='flex flex-col gap-10 '>
        <div className='flex justify-center gap-28 mt-16 border px-[200px]'>
          <Profile />
          <About />
        </div>

        {/* languages */}
        <div className='border whitespace-nowrap md:px-[200px]'>
          <Languages />
        </div>

        {/* tabs ::: projects
         */}
        <div>
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />
          <div className=''>{activeTab === "Projects" && <Projects />}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
