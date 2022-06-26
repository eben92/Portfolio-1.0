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
  return (
    <div>
      <>
        <Header />
      </>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
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
