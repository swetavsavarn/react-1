
// Props are the properties or values that are passed to a component
// import Paragraph from "./Paragraph"
// import PropTypes from 'prop-types'
import Form from "./Form"
import Paragraph from './Paragraph'
import Alerts from "./Alerts"
import {useState} from 'react'



function Navbar(value) {
    const [alerts,setAlerts]=useState({})


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: value.darkModeStatus }} >
                <div className="container-fluid" style={{ backgroundColor: value.darkModeStatus }}>
                    <a className="navbar-brand" href="/">{value.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{ backgroundColor: value.darkModeStatus }}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href> About us</a>
                            </li>
                        </ul>
                        <div className='d-flex' style={{ backgroundColor: value.darkModeStatus }}>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            <Paragraph value="Dark Mode"></Paragraph>
                            <div class="form-check form-switch mx-3">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={darkMode} ></input>

                            </div>
                        </div>
                    </div>
                </div>

            </nav >
            {alerts.message && (
                <>
                <Alerts type={alerts.type} message={alerts.message}/>
                {setTimeout(()=>removeAlert(), 1500)}
                </>
            )}

             
            <Form colorComponents={value.colorComponents} setAlerts={setAlerts}></Form>

        </>
    )
    function removeAlert(){
        setAlerts({type:'',message:''})
    }
    function darkMode() {
        (value.darkModeStatus === 'white') ? setDarkMode() : setLightMode()
    }
    function setDarkMode() {
        document.body.style.backgroundColor = "#000000"
        value.changeDarkModeStaus('black')
        value.setcolorComponents("white")

    }
    function setLightMode() {
        document.body.style.backgroundColor = "white";
        value.changeDarkModeStaus('white');
        value.setcolorComponents("black")
    }

}
export default Navbar

// Navbar.propTypes = {
//     value: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired
// }  // this is used to the restrict the data type od upcoming data
// Navbar.defaultProps = {
//     value: "abc",
//     title: "ghis"
// }