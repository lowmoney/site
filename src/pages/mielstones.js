import React, { Component } from "react"
import "../components/mielstones.css"
import Chart from "../components/Chartcomp"


const milestones = () => (
    <div>
        <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet"/>
        </head>

        <div id="bodyWrapper">
            <div id="bannerImg">
                <img id="image" src={require("../images/diversityimg.jpg")}></img>
            </div>
        </div>

        <div id="info">
            <p>Together we can succeed</p>
        </div>

        <Chart></Chart>

        <div id="footer">
                <p>The OSU Chick-fil-A</p>
                <p><a>1924 N High ST, Columbus, OH 43201</a></p>
                <p><a>(614) 424-6020</a> <a>chick-fil-a.com</a></p>
            </div>

    </div>
)

export default milestones