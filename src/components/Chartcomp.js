import React, { Component } from 'react';
import {profits} from '../components/charts.js'


class Chart extends Component {
    componentDidMount(){
        {profits()}
    }

    render() {
        return(
        <>
            <div id="profits">
            <canvas id="profitsChart"></canvas>
        </div>

        <div id="profitInfo">
            <p>Sustained profits with jumps in the start and end of the shcool year</p>
        </div>

        <div id="footTraffic">
            <canvas id="footChart"></canvas>
        </div>

        <div id="footTrafficInfo">
            <p>put some info about traffic in bullet points</p>
        </div>
        </>
        )
    }
}

export default Chart