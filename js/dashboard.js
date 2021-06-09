$(".counter-up").counterUp(
    {
        delay: 10,
        time :1000
    }
);

let dateArr = ["july 21","july 20","july 19","july 18","july 17","july 16","july 15","july 14","july 13","july 12","july 11"];
let orderCountArr =[7,5,6,4,6,4,8,6,8,9,6];
let viewerCountArr = [13,12,15,14,20,17,19,16,23,33,16];

let ov = document.getElementById('ov').getContext('2d');
        let ovChart = new Chart(ov, {
            type: 'line',
            data: {
                labels: dateArr,
                datasets: [
                    {
                    label: 'Order Count',
                    data: orderCountArr,
                    backgroundColor: [
                        '#007bff40'
                    ],
                    borderColor: [
                        '#007bff'
                    ],
                    borderWidth: 1,
                    lineTension : 0,
                    fill: true,
                },
                {
                    label: 'Viewer Count',
                    data: viewerCountArr,
                    backgroundColor: [
                        '#28a74530'
                    ],
                    borderColor: [
                        '#28a745'
                    ],
                    borderWidth: 1,
                    lineTension : 0,
                    fill: true
                }
            ]
            },
            options: {
                scales: {
                    yAxes: {
                        display:false,
                        beginAtZero: true
                    },
                    xAxes: {   
                        display:false,
                            
                    }
                },
                legend:{
                    display: false,
                    position: 'bottom',
                    label: {
                        fontColor:"#333",
                        usePointStyle:true 
                    }
                }
            }
        });
        let orderFromPlace = [5,15,4,9,7];
        let places = ["YNG","MDY","NPD","Shan","MGW"];
let op = document.getElementById('op').getContext('2d');
let opChart = new Chart(op, {
    type: 'doughnut',
    data: {
        labels: places,
        datasets: [{
            label: '# of Votes',
            data: orderFromPlace,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                display: false,
                beginAtZero: true
            },
            x: {
                display: false,
            }
        },
        options: {
            plugins: {
                legend: {
                    display: false,
                    position:'bottom',
                    labels: {
                        color: 'rgb(255, 99, 132)'
                    }
                }
            }
        }
    }
});
