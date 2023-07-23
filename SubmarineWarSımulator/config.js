function ChartData(){
 return{
    datasets:
    [
        {
            label: "Submarine Torpedo System",
            data: trainingSet().map((point)=>{
                return {x:point.distance, y:point.depth}
            }),
            pointBackgroundColor: trainingSet().map((point)=>{
                return point.attack ? 'red' : 'green'
            }),
            pointRadius: 5.5,
            showLine: false,
            backgroundColor: 'purple'
        }
    ]
 }
}
function chartOptions(){
    return{
        maintainAspectRatio: false,
        legend:
        {
            labels:
            {
                fontsize:20
            }
        },
        responsive: true,
        scales:
        {
            xAxes:
            [
                {
                    display: true,
                    scaleLabel:
                    {
                        display: true,
                        labelString: 'Distance',
                        fotnsize:40
                    },
                ticks:
                {
                    fontsize:10,
                    max:1000,
                    min:0
                }
                }
            ],
            yAxes:
            [
                {
                    display: true,
                    scaleLabel:
                    {
                        display: true,
                        labelString: 'Depth',
                        fotnsize:40
                    },
                ticks:
                {
                    fontsize:10,
                    max:1000,
                    min:0
                }
                }
            ],
        }
    }
}