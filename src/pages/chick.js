import React from "react"
import "../components/test.css"
import Navbar from "../components/Navbar.js"


const landingpage = () => (
    <div>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>  
        </head>

        

        <div id="bodyWrapper">

        <div id="navbar">

            <Navbar></Navbar>
    

            <div id="navLinks">
                    <p>home</p>
                    <p>about</p>
            </div>
        </div>


<div id="mainBod">
            <div className="navBod" id="navLinkCover"></div>


            <div className="navBod" id="chickfilalogo">
                <img id="image" src={require("../images/chickfilalogo.png")}></img>
            </div>

            <div className="navBod" id="bannerImg">

            <img id="image" src={require("../images/uni.jpg")}></img>

            </div>

            <div className="navBod" id="strategy">
                <p id="startPar">At the Heart of Ohio</p>
                <ul id="stratList">
                    <li>University Involvement</li>
                    <li>Community Engagement</li>
                    <li>Employee Satisfaction</li>
                </ul>
            </div>

            <div className="navBod" id="mileStones">
                <p>Milestones</p>
                <ul id="milStonesList">
                    <li>Opened Our Doors at</li>
                    <li>So much money in profit</li>
                    <li>Day One Employees</li>
                </ul>
            </div>
            
            <div className="navBod" id="footer">
                <p>The OSU Chick-fil-A</p>
                <p><a>1924 N High ST, Columbus, OH 43201</a></p>
                <p><a>(614) 424-6020</a> <a>chick-fil-a.com</a></p>
            </div>
</div>

        </div>

    </div>
)

export default landingpage