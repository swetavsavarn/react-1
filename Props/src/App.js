
import './App.css';
import Navbar from './Components/Navbar';
// import Navbar from './Components/Navbar'
let obj = {
  value: "this is a paragraph",
  title: "Text Utils",
}

function App() {
  return (
    <>

      <Navbar value="yo" title="yo1" ></Navbar>{/*(//this is a value that is passed to Navbar component //Note - If we want to pass an integer then we have to wrap it in {}) */}
      <Navbar value="yo"></Navbar>
        
      </>


  );
}

export default App;
