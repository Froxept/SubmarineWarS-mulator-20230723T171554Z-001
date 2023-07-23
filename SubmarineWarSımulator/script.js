let chart = new Chart(document.querySelector('#chart'), {
    type: 'scatter',
    data: ChartData(),
    options: chartOptions()
});

document.querySelector('#plot').addEventListener('click', () => {
    chart.data.datasets[0].data.push({
        x: Number(document.querySelector('#distance').value),
        y: Number(document.querySelector('#depth').value)
    });
    chart.update();
});

document.querySelector('#decide').addEventListener('click', () => {
    const x = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1].x;
    const y = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1].y;
    let distances = [];

    trainingSet().forEach((point) => {
        distances.push(Math.sqrt(((x - point.distance) ** 2) + ((y - point.depth) ** 2)));
    });

    let redNeighbors = 0;
    let greenNeighbors = 0;
    for (let k = 1; k <= 5; k++) {
        const minDistance = Math.min.apply(Math, distances);
        const index = distances.indexOf(minDistance);
        chart.data.datasets[0].pointBackgroundColor[index] == 'red' ? redNeighbors++ : greenNeighbors++;
        distances[index] = +Infinity;
    }

    if (redNeighbors > greenNeighbors) {
        document.querySelector('#output').innerHTML = 'Do not attack!';
        document.querySelector('#output').style.color = 'red';
        chart.data.datasets[0].pointBackgroundColor[chart.data.datasets[0].data.length - 1] = 'red';
    } else {
        document.querySelector('#output').innerHTML = 'Attack!';
        document.querySelector('#output').style.color = 'green';
        chart.data.datasets[0].pointBackgroundColor[chart.data.datasets[0].data.length - 1] = 'green';
    }
    
    chart.update();
    
});
