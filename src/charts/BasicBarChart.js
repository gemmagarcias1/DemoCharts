import React, {useState, useEffect} from "react";
import Chart from "react-apexcharts";

function BasicBarChart() {

    let opt = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [['Projected', 'Rental', 'Income'], ['Non', 'recoverable', 'Expenses'], ['Projected NOI']],
                labels: {
                    rotate: 0
                  }
            },
            title: {
                text: "NOI Bridge (K)"
            },
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#0E3860'
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '25%',
                }
            },
            grid: {
                show: false
            },
            fill: {
                opacity: 1
            },
        },
        series: [
            {
                name: "NOI Bridges",
                data: [19.163, 3.25, 16.038]
            }
        ]
    };

    const [ options, setOptions ] = useState(opt)


useEffect(() => {
    const timer = setTimeout(() => {
      const optim= {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: [['Projected', 'Rental', 'Income'], ['Non', 'recoverable', 'Expenses'], ['Projected NOI']],
                labels: {
                    rotate: 0
                  }
            },
            title: {
                text: "NOI Bridge (K)"
            },
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#0E3860'
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: '25%',
                }
            },
            grid: {
                show: false
            },
            fill: {
                opacity: 1
            },
        },
        series: [
            {
                name: "NOI Bridges",
                data: [1, 1, 16.038]
            }
        ]
    };
    setOptions(optim)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div className="App">
      <Chart
            options={options.options}
            series={options.series}
            type="bar"
            width="350"
        />
    </div>
  );
}

export default BasicBarChart;