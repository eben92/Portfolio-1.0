import { About, Header, Languages, Profile } from "./components";
import logo from "./logo.svg";
// import "./App.css";

function App() {
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
      </div>
    </div>
  );
}

export default App;
