import React , { Component } from "react"
import "../components/navbar.css"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'
import milestones from "../pages/mielstones";

class Navbar extends Component {
    myFunction () {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none"
        } else {
            x.style.display = "block";
        }
    }

    render() {
        return (
            
            <div className="topnav">
                {/* <FontAwesomeIcon icon={faAlignJustify} onClick={this.myFunction} id="icon"/> */}
                <div id="myLinks">
                    <a>home</a>
                    <a>GameDay</a>
                    <a>Milestones</a>
                </div>
            </div>
        )
    }
}

export default Navbar