import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Footer,
  Header,
  Languages,
  Profile,
  Projects,
  Tabs,
  Cup,
  Modal,
} from "./components";
import { Home } from "./pages";

function App() {
  const [activeTab, setActiveTab] = useState("Projects");
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <>
        <Header />
      </>
      <BrowserRouter>
        <>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
        <Routes>
          <Route path='/' element={<Home setShowModal={setShowModal} />} />
        </Routes>
      </BrowserRouter>

      {/* <div className=''>
        <Cup />
      </div> */}

      <Footer />
    </div>
  );
}

export default App;
