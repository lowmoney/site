import React , { Component } from "react"
import "../components/navbar.css"
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faAlignJustify } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    myFunction () {
        var bod = document.getElementById("bodyWrapper");
        var cover = document.getElementById("navLinkCover");
        if (bod.style.animationName === "none") {
            bod.style.animationName = "expand";
            cover.style.animationName = "expand";
        } else {
            bod.style.animationName = "none";
            cover.style.animationName = "none";
        }
    }

    render() {
        return (
            
            <div className="topnav">
                {/* <FontAwesomeIcon icon={faAlignJustify} onClick={this.myFunction} id="icon"/> */}
                <button className="icon" onClick={this.myFunction}>click me</button>
            </div>
        )
    }
}

export default Navbar