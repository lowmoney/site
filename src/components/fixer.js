//import ApexCharts from 'apexcharts'
var Chart = require('chart.js');
const fetch = require('isomorphic-fetch')

let rates = []
export let historicalRates = [0,1,2,3,4,5]

export function getRates(base=null) {
    const URL = 'https://api.exchangeratesapi.io/latest'
    let allRates = 0
    if (base == null) {
        fetch(URL+'?base=USD')
        .then((resp) => resp.json())
        .then(function(data){
            console.log(data)
            rates =[]
            rates = data.rates
        })
    }

    else {
        fetch(URL+'?base='+base)
        .then((resp) => resp.json())
        .then(function(data){
            console.log(data)
            rates = []
            rates = data.rates
        })
    }
}

// function that converts from one currency to another
// argument to is the currency you convert to
// argument amount is the amount
function convert(to='USD',amount=1) {
    let price = 0

    switch (to) {
        case 'AUD':
            price = rates.AUD * amount
            break
        case 'BGN':
            price = rates.BGN * amount
            break
        case 'BRL':
            price = rates.BRL * amount
            break
        case 'CAD':
            price = rates.CAD * amount
            break
        case 'CHF':
            price = rates.CHF * amount
            break
        case 'CNY':
            price = rates.CNY * amount
            break
        case 'CZK':
            price = rates.CZK * amount
            break
        case 'DKK':
            price = rates.DKK * amount
            break
        case 'GBP':
            price = rates.GBP * amount
            break
        case 'HKD':
            price = rates.HKD * amount
            break
        case 'HRK':
            price = rates.HRK * amount
            break
        case 'HUF':
            price = rates.HUF * amount
            break
        case 'IDR':
            price = rates.IDR * amount
            break
        case 'ILS':
            price = rates.ILS * amount
            break
        case 'INR':
            price = rates.INR * amount
            break
        case 'ISK':
            price = rates.ISK * amount
            break
        case 'JPY':
            price = rates.JPY * amount
            break
        case 'KRW':
            price = rates.KRW * amount
            break
        case 'MXN':
            price = rates.MXN * amount
            break
        case 'MYR':
            price = rates.MYR * amount
            break
        case 'NOK':
            price = rates.NOK * amount
            break
        case 'NZD':
            price = rates.NZD * amount
            break
        case 'PHP':
            price = rates.PHP * amount
            break
        case 'PLN':
            price = rates.PLN * amount
            break
        case 'RON':
            price = rates.RON * amount
            break
        case 'RUB':
            price = rates.RUB * amount
            break
        case 'SEK':
            price = rates.SEK * amount
            break
        case 'SGD':
            price = rates.SGD * amount
            break
        case 'THB':
            price = rates.THB * amount
            break
        case 'TRY':
            price = rates.TRY * amount
            break
        case 'USD':
            price = rates.USD * amount
            break
        case 'ZAR':
            price = rates.ZAR * amount
            break
    }

    return price
}

// function to change base rate
export function changeBase() {
    let currency = document.getElementById('fromCurrency')
    let val = currency.options[currency.selectedIndex].value
    getRates(val)
    updateVal()
    historicalData()
}

// function to update the value
export function updateVal() {
    let toValue = document.getElementById('toValue')
    let toCurr = document.getElementById('toCurrency')
    let to = toCurr.options[toCurr.selectedIndex].value
    let amount = document.getElementById('fromFourm').value
    let val = convert(to,amount).toFixed(2)
    console.log(val)
    console.log(to)
    console.log(amount)
    toValue.innerHTML = val
}

// function to show data
export function historicalData() {
    console.log('hello')
    let currency = document.getElementById('fromCurrency')
    let baseCurr = currency.options[currency.selectedIndex].value

    let toCurr = document.getElementById('toCurrency')
    let to = toCurr.options[toCurr.selectedIndex].value
    const URL = 'https://api.exchangeratesapi.io/history?start_at=2019-01-01&end_at=2019-07-01&base='+baseCurr+'&symbols='+to
    fetch(URL)
    .then((resp) => resp.json())
    .then(function(data){
        let allRates = data.rates
        historicalRates = []
        console.log('im in fetch')
        switch (to) {
            case 'AUD':
            console.log('AUD')
                historicalRates.push(allRates["2019-01-15"].AUD)
                historicalRates.push(allRates["2019-02-15"].AUD)
                historicalRates.push(allRates["2019-03-15"].AUD)
                historicalRates.push(allRates["2019-04-15"].AUD)
                historicalRates.push(allRates["2019-05-15"].AUD)
                historicalRates.push(allRates["2019-06-17"].AUD)
                break
            case 'BGN':
                historicalRates.push(allRates["2019-01-15"].BGN)
                historicalRates.push(allRates["2019-02-15"].BGN)
                historicalRates.push(allRates["2019-03-15"].BGN)
                historicalRates.push(allRates["2019-04-15"].BGN)
                historicalRates.push(allRates["2019-05-15"].BGN)
                historicalRates.push(allRates["2019-06-17"].BGN)
                break
            case 'BRL':
                historicalRates.push(allRates["2019-01-15"].BRL)
                historicalRates.push(allRates["2019-02-15"].BRL)
                historicalRates.push(allRates["2019-03-15"].BRL)
                historicalRates.push(allRates["2019-04-15"].BRL)
                historicalRates.push(allRates["2019-05-15"].BRL)
                historicalRates.push(allRates["2019-06-17"].BRL)
                break
            case 'CAD':
                historicalRates.push(allRates["2019-01-15"].CAD)
                historicalRates.push(allRates["2019-02-15"].CAD)
                historicalRates.push(allRates["2019-03-15"].CAD)
                historicalRates.push(allRates["2019-04-15"].CAD)
                historicalRates.push(allRates["2019-05-15"].CAD)
                historicalRates.push(allRates["2019-06-17"].CAD)
                break
            case 'CHF':
                historicalRates.push(allRates["2019-01-15"].CHF)
                historicalRates.push(allRates["2019-02-15"].CHF)
                historicalRates.push(allRates["2019-03-15"].CHF)
                historicalRates.push(allRates["2019-04-15"].CHF)
                historicalRates.push(allRates["2019-05-15"].CHF)
                historicalRates.push(allRates["2019-06-17"].CHF)
                break
            case 'CNY':
                historicalRates.push(allRates["2019-01-15"].CNY)
                historicalRates.push(allRates["2019-02-15"].CNY)
                historicalRates.push(allRates["2019-03-15"].CNY)
                historicalRates.push(allRates["2019-04-15"].CNY)
                historicalRates.push(allRates["2019-05-15"].CNY)
                historicalRates.push(allRates["2019-06-17"].CNY)
                break
            case 'CZK':
                historicalRates.push(allRates["2019-01-15"].CZK)
                historicalRates.push(allRates["2019-02-15"].CZK)
                historicalRates.push(allRates["2019-03-15"].CZK)
                historicalRates.push(allRates["2019-04-15"].CZK)
                historicalRates.push(allRates["2019-05-15"].CZK)
                historicalRates.push(allRates["2019-06-17"].CZK)
                break
            case 'DKK':
                historicalRates.push(allRates["2019-01-15"].DKK)
                historicalRates.push(allRates["2019-02-15"].DKK)
                historicalRates.push(allRates["2019-03-15"].DKK)
                historicalRates.push(allRates["2019-04-15"].DKK)
                historicalRates.push(allRates["2019-05-15"].DKK)
                historicalRates.push(allRates["2019-06-17"].DKK)
                break
            case 'GBP':
                historicalRates.push(allRates["2019-01-15"].GBP)
                historicalRates.push(allRates["2019-02-15"].GBP)
                historicalRates.push(allRates["2019-03-15"].GBP)
                historicalRates.push(allRates["2019-04-15"].GBP)
                historicalRates.push(allRates["2019-05-15"].GBP)
                historicalRates.push(allRates["2019-06-17"].GBP)
                break
            case 'HKD':
                historicalRates.push(allRates["2019-01-15"].HKD)
                historicalRates.push(allRates["2019-02-15"].HKD)
                historicalRates.push(allRates["2019-03-15"].HKD)
                historicalRates.push(allRates["2019-04-15"].HKD)
                historicalRates.push(allRates["2019-05-15"].HKD)
                historicalRates.push(allRates["2019-06-17"].HKD)
                break
            case 'HRK':
                historicalRates.push(allRates["2019-01-15"].HRK)
                historicalRates.push(allRates["2019-02-15"].HRK)
                historicalRates.push(allRates["2019-03-15"].HRK)
                historicalRates.push(allRates["2019-04-15"].HRK)
                historicalRates.push(allRates["2019-05-15"].HRK)
                historicalRates.push(allRates["2019-06-17"].HRK)
                break
            case 'HUF':
                historicalRates.push(allRates["2019-01-15"].HUF)
                historicalRates.push(allRates["2019-02-15"].HUF)
                historicalRates.push(allRates["2019-03-15"].HUF)
                historicalRates.push(allRates["2019-04-15"].HUF)
                historicalRates.push(allRates["2019-05-15"].HUF)
                historicalRates.push(allRates["2019-06-17"].HUF)
                break
            case 'IDR':
                historicalRates.push(allRates["2019-01-15"].IDR)
                historicalRates.push(allRates["2019-02-15"].IDR)
                historicalRates.push(allRates["2019-03-15"].IDR)
                historicalRates.push(allRates["2019-04-15"].IDR)
                historicalRates.push(allRates["2019-05-15"].IDR)
                historicalRates.push(allRates["2019-06-17"].IDR)
                break
            case 'ILS':
                historicalRates.push(allRates["2019-01-15"].ILS)
                historicalRates.push(allRates["2019-02-15"].ILS)
                historicalRates.push(allRates["2019-03-15"].ILS)
                historicalRates.push(allRates["2019-04-15"].ILS)
                historicalRates.push(allRates["2019-05-15"].ILS)
                historicalRates.push(allRates["2019-06-17"].ILS)
                break
            case 'INR':
                historicalRates.push(allRates["2019-01-15"].INR)
                historicalRates.push(allRates["2019-02-15"].INR)
                historicalRates.push(allRates["2019-03-15"].INR)
                historicalRates.push(allRates["2019-04-15"].INR)
                historicalRates.push(allRates["2019-05-15"].INR)
                historicalRates.push(allRates["2019-06-17"].INR)
                break
            case 'ISK':
                historicalRates.push(allRates["2019-01-15"].ISK)
                historicalRates.push(allRates["2019-02-15"].ISK)
                historicalRates.push(allRates["2019-03-15"].ISK)
                historicalRates.push(allRates["2019-04-15"].ISK)
                historicalRates.push(allRates["2019-05-15"].ISK)
                historicalRates.push(allRates["2019-06-17"].ISK)
                break
            case 'JPY':
                historicalRates.push(allRates["2019-01-15"].JPY)
                historicalRates.push(allRates["2019-02-15"].JPY)
                historicalRates.push(allRates["2019-03-15"].JPY)
                historicalRates.push(allRates["2019-04-15"].JPY)
                historicalRates.push(allRates["2019-05-15"].JPY)
                historicalRates.push(allRates["2019-06-17"].JPY)
                break
            case 'KRW':
                historicalRates.push(allRates["2019-01-15"].KRW)
                historicalRates.push(allRates["2019-02-15"].KRW)
                historicalRates.push(allRates["2019-03-15"].KRW)
                historicalRates.push(allRates["2019-04-15"].KRW)
                historicalRates.push(allRates["2019-05-15"].KRW)
                historicalRates.push(allRates["2019-06-17"].KRW)
                break
            case 'MXN':
                historicalRates.push(allRates["2019-01-15"].MXN)
                historicalRates.push(allRates["2019-02-15"].MXN)
                historicalRates.push(allRates["2019-03-15"].MXN)
                historicalRates.push(allRates["2019-04-15"].MXN)
                historicalRates.push(allRates["2019-05-15"].MXN)
                historicalRates.push(allRates["2019-06-17"].MXN)
                break
            case 'MYR':
                historicalRates.push(allRates["2019-01-15"].MYR)
                historicalRates.push(allRates["2019-02-15"].MYR)
                historicalRates.push(allRates["2019-03-15"].MYR)
                historicalRates.push(allRates["2019-04-15"].MYR)
                historicalRates.push(allRates["2019-05-15"].MYR)
                historicalRates.push(allRates["2019-06-17"].MYR)
                break
            case 'NOK':
                historicalRates.push(allRates["2019-01-15"].NOK)
                historicalRates.push(allRates["2019-02-15"].NOK)
                historicalRates.push(allRates["2019-03-15"].NOK)
                historicalRates.push(allRates["2019-04-15"].NOK)
                historicalRates.push(allRates["2019-05-15"].NOK)
                historicalRates.push(allRates["2019-06-17"].NOK)
                break
            case 'NZD':
                historicalRates.push(allRates["2019-01-15"].NZD)
                historicalRates.push(allRates["2019-02-15"].NZD)
                historicalRates.push(allRates["2019-03-15"].NZD)
                historicalRates.push(allRates["2019-04-15"].NZD)
                historicalRates.push(allRates["2019-05-15"].NZD)
                historicalRates.push(allRates["2019-06-17"].NZD)
                break
            case 'PHP':
                historicalRates.push(allRates["2019-01-15"].PHP)
                historicalRates.push(allRates["2019-02-15"].PHP)
                historicalRates.push(allRates["2019-03-15"].PHP)
                historicalRates.push(allRates["2019-04-15"].PHP)
                historicalRates.push(allRates["2019-05-15"].PHP)
                historicalRates.push(allRates["2019-06-17"].PHP)
                break
            case 'PLN':
                historicalRates.push(allRates["2019-01-15"].PLN)
                historicalRates.push(allRates["2019-02-15"].PLN)
                historicalRates.push(allRates["2019-03-15"].PLN)
                historicalRates.push(allRates["2019-04-15"].PLN)
                historicalRates.push(allRates["2019-05-15"].PLN)
                historicalRates.push(allRates["2019-06-17"].PLN)
                break
            case 'RON':
                historicalRates.push(allRates["2019-01-15"].RON)
                historicalRates.push(allRates["2019-02-15"].RON)
                historicalRates.push(allRates["2019-03-15"].RON)
                historicalRates.push(allRates["2019-04-15"].RON)
                historicalRates.push(allRates["2019-05-15"].RON)
                historicalRates.push(allRates["2019-06-17"].RON)
                break
            case 'RUB':
                historicalRates.push(allRates["2019-01-15"].RUB)
                historicalRates.push(allRates["2019-02-15"].RUB)
                historicalRates.push(allRates["2019-03-15"].RUB)
                historicalRates.push(allRates["2019-04-15"].RUB)
                historicalRates.push(allRates["2019-05-15"].RUB)
                historicalRates.push(allRates["2019-06-17"].RUB)
                break
            case 'SEK':
                historicalRates.push(allRates["2019-01-15"].SEK)
                historicalRates.push(allRates["2019-02-15"].SEK)
                historicalRates.push(allRates["2019-03-15"].SEK)
                historicalRates.push(allRates["2019-04-15"].SEK)
                historicalRates.push(allRates["2019-05-15"].SEK)
                historicalRates.push(allRates["2019-06-17"].SEK)
                break
            case 'SGD':
                historicalRates.push(allRates["2019-01-15"].SGD)
                historicalRates.push(allRates["2019-02-15"].SGD)
                historicalRates.push(allRates["2019-03-15"].SGD)
                historicalRates.push(allRates["2019-04-15"].SGD)
                historicalRates.push(allRates["2019-05-15"].SGD)
                historicalRates.push(allRates["2019-06-17"].SGD)
                break
            case 'THB':
                historicalRates.push(allRates["2019-01-15"].THB)
                historicalRates.push(allRates["2019-02-15"].THB)
                historicalRates.push(allRates["2019-03-15"].THB)
                historicalRates.push(allRates["2019-04-15"].THB)
                historicalRates.push(allRates["2019-05-15"].THB)
                historicalRates.push(allRates["2019-06-17"].THB)
                break
            case 'TRY':
                historicalRates.push(allRates["2019-01-15"].TRY)
                historicalRates.push(allRates["2019-02-15"].TRY)
                historicalRates.push(allRates["2019-03-15"].TRY)
                historicalRates.push(allRates["2019-04-15"].TRY)
                historicalRates.push(allRates["2019-05-15"].TRY)
                historicalRates.push(allRates["2019-06-17"].TRY)
                break
            case 'USD':
                historicalRates.push(allRates["2019-01-15"].USD)
                historicalRates.push(allRates["2019-02-15"].USD)
                historicalRates.push(allRates["2019-03-15"].USD)
                historicalRates.push(allRates["2019-04-15"].USD)
                historicalRates.push(allRates["2019-05-15"].USD)
                historicalRates.push(allRates["2019-06-17"].USD)
                break
            case 'ZAR':
                historicalRates.push(allRates["2019-01-15"].ZAR)
                historicalRates.push(allRates["2019-02-15"].ZAR)
                historicalRates.push(allRates["2019-03-15"].ZAR)
                historicalRates.push(allRates["2019-04-15"].ZAR)
                historicalRates.push(allRates["2019-05-15"].ZAR)
                historicalRates.push(allRates["2019-06-17"].ZAR)
                break
        }
    })

    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Currency Value',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [historicalRates[0], historicalRates[1], historicalRates[2], historicalRates[3], historicalRates[4], historicalRates[5], historicalRates[6]]
        }]
    },

    // Configuration options go here
    options: {}
});
    console.log(historicalRates)
}