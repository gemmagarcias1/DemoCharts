import React from "react";
import Chart from "react-apexcharts";

function DonutChart() {

    const opt = {
        series: [44, 55, 41],
        options: {
            chart: {
                type: 'donut'
            },
            labels: ['Apple', 'Mango', 'Orange'],
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#0E3860',
                }
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        offset: 45
                    },
                    customScale: 0.7,
                    donut: {
                        size: '80%',
                    }
                },
            },
            legend: {
                show: false
            },
            fill: {
                opacity: 1
            },
            title: {
                text: "Monochrome Pie"
            },
            dataLabels: {
                style: {
                    fontSize: '14px',
                    fontFamily: 'Work Sans, sans-serif',
                    fontWeight: '100',
                    colors: ['#000000']
                },
                dropShadow: {
                    enabled: false
                },
                formatter(val, opts) {
                    const name = opts.w.globals.labels[opts.seriesIndex];
                    return [name, opts.w.globals.series[opts.seriesIndex]];
                }
            },
        },
    };

  return (
    <div className="App">
      <Chart
            options={opt.options}
            series={opt.series}
            type="donut"
            width="350"
        />
    </div>
  );
}

export default DonutChart;