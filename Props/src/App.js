import Navbar from "./Components/Navbar"
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./Components/About-us"
function App() {
  const [mode, setMode] = useState("white")
  const [colorComponents, setcolorComponents] = useState('black')
  return (
    // <Router>
    // <>

    //     <switch>
    //       <Route exact path="/about">
    //         <About></About>
    //       </Route>
    //       <Route exact path="/">
    //         <Navbar value="Enter the text" title="Converter" darkModeStatus={mode} changeDarkModeStaus={setMode} colorComponents={colorComponents} setcolorComponents={setcolorComponents} ></Navbar>
    //       </Route>
    //     </switch>

    // </>
    // </Router>
    <BrowserRouter>
      <Navbar value="Enter the text" title="Converter" darkModeStatus={mode} changeDarkModeStaus={setMode} colorComponents={colorComponents} setcolorComponents={setcolorComponents} ></Navbar>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route exact path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>



  );
}

export default App;
