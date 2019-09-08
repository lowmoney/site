import Chart from 'chart.js'

export function profits() {
    var profits = document.getElementById('profitsChart').getContext('2d');
    var profitChart = new Chart(profits, {
        //choose bar graph
        type: 'bar',

        //data for the bar graph
        data: {
            labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec',],
            datasets: [{
                label:'Profits in thousand dollars',
                data:[-2,-1,3,2,5,3,2,8,5,7,4,2]
            }]
        }
    })

    footTraffic();
}

function footTraffic() {
    var traffic = document.getElementById('footChart').getContext('2d');
    var footChart = new Chart(traffic, {
        //choose pie graph
        type: 'pie',
        data: {
            labels: ['Students','Neighborhood','Visitors'],
            datasets: [{
                data:[30,20,10]
            }],
            labels: ['Students','Neighborhood','Visitors']
        }
    })
}