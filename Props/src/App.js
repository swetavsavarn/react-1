import Navbar from "./Components/Navbar"
import { useState } from 'react'
function App() {
  const [mode, setMode] = useState("white")
  const [colorComponents, setcolorComponents] = useState('black')
  return (
    <>
      <Navbar value="Enter the text" title="Converter" darkModeStatus={mode} changeDarkModeStaus={setMode} colorComponents={colorComponents} setcolorComponents={setcolorComponents} ></Navbar>
    </>




  );
}

export default App;
