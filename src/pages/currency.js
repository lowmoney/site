import React from "react"
import "../components/currency.css"
import {changeBase,updateVal,getRates} from "../components/fixer.js"

const fashion = () => (
    <div>
        <div id='bodyWrapper'>

            <div id='from'>
                {getRates('USD')}
                <p>from</p>
                <input onChange={updateVal} type="text" name="from" id="fromFourm"></input>
                <select onChange={changeBase} id="fromCurrency">
                    <option value='AUD'>AUD</option>
                    <option value='BGN'>BGN</option>
                    <option value='BRL'>BRL</option>
                    <option value='CAD'>CAD</option>
                    <option value='CHF'>CHF</option>
                    <option value='CNY'>CNY</option>
                    <option value='CZK'>CZK</option>
                    <option value='DKK'>DKK</option>
                    <option value='GBP'>GBP</option>
                    <option value='HKD'>HKD</option>
                    <option value='HRK'>HRK</option>
                    <option value='HUF'>HUF</option>
                    <option value='IDR'>IDR</option>
                    <option value='ILS'>ILS</option>
                    <option value='INR'>INR</option>
                    <option value='ISK'>ISK</option>
                    <option value='JPY'>JPY</option>
                    <option value='KRW'>KRW</option>
                    <option value='MXN'>MXN</option>
                    <option value='MYR'>MYR</option>
                    <option value='NOK'>NOK</option>
                    <option value='NZD'>NZD</option>
                    <option value='PHP'>PHP</option>
                    <option value='PLN'>PLN</option>
                    <option value='RON'>RON</option>
                    <option value='RUB'>RUB</option>
                    <option value='SEK'>SEK</option>
                    <option value='SGD'>SGD</option>
                    <option value='THB'>THB</option>
                    <option value='TRY'>TRY</option>
                    <option value='USD'>USD</option>
                    <option value='ZAR'>ZAR</option>
                </select>
            </div>
            
            
            <div id='to'>
                <p>to</p>
                <p id='toValue'>0</p>
                <select id="toCurrency" onChange={changeBase}>
                    <option value='AUD'>AUD</option>
                    <option value='BGN'>BGN</option>
                    <option value='BRL'>BRL</option>
                    <option value='CAD'>CAD</option>
                    <option value='CHF'>CHF</option>
                    <option value='CNY'>CNY</option>
                    <option value='CZK'>CZK</option>
                    <option value='DKK'>DKK</option>
                    <option value='GBP'>GBP</option>
                    <option value='HKD'>HKD</option>
                    <option value='HRK'>HRK</option>
                    <option value='HUF'>HUF</option>
                    <option value='IDR'>IDR</option>
                    <option value='ILS'>ILS</option>
                    <option value='INR'>INR</option>
                    <option value='ISK'>ISK</option>
                    <option value='JPY'>JPY</option>
                    <option value='KRW'>KRW</option>
                    <option value='MXN'>MXN</option>
                    <option value='MYR'>MYR</option>
                    <option value='NOK'>NOK</option>
                    <option value='NZD'>NZD</option>
                    <option value='PHP'>PHP</option>
                    <option value='PLN'>PLN</option>
                    <option value='RON'>RON</option>
                    <option value='RUB'>RUB</option>
                    <option value='SEK'>SEK</option>
                    <option value='SGD'>SGD</option>
                    <option value='THB'>THB</option>
                    <option value='TRY'>TRY</option>
                    <option value='USD'>USD</option>
                    <option value='ZAR'>ZAR</option>
                </select>
            </div>
            {}
            <div id='chart'>
            </div>

        </div>
    </div>
)

export default fashion