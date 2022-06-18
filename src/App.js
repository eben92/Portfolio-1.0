import { About, Header, Profile } from "./components";
import logo from "./logo.svg";
// import "./App.css";

function App() {
  return (
    <div className='App'>
      <>
        <Header />
      </>

      <div className='flex justify-center gap-28 mt-16 border px-[200px]'>
        <Profile />
        <About />
      </div>
    </div>
  );
}

export default App;
