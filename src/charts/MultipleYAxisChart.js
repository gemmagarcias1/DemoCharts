import React from "react";
import Chart from "react-apexcharts";

function MultipleYAxisChart() {

    const opt = {
        series: [{
            name: 'Area (sqm)',
            type: 'column',
            data: [3000, 2000, 2.5, 1.5]
          }, {
            name: 'Area per entities',
            type: 'column',
            data: [1000, 500, 3.1, 4]
          }, {
            name: 'Entities',
            type: 'line',
            data: [300, 1000, 37, 36]
          }],
          options: {
            chart: {
              height: 350,
              type: 'line',
              stacked: false,
              zoom: {
                  enabled: false
              }
            },
            fill: {
                colors: ['#0E3860', '#a8cdef'],
                opacity: 1
            },
            colors: ['#0E3860', '#a8cdef', '#d9a802'],
            dataLabels: {
              enabled: true,
              enabledOnSeries: [2],
              offsetX: 10,
              background: {
                  enabled: false
              },
              style: {
                  fontWeight: '100',
                  colors: ['#171717']
              }
            },
            markers: {
                size: [0, 0, 3]
            },
            stroke: {
              width: [0, 0, 1]
            },
            title: {
              text: 'Asset configuration',
              align: 'left',
              offsetX: 0
            },
            grid: {
              show: false
            },
            xaxis: {
              categories: ["Residential", "Retail", "Storage", "Parking"],
            },
            yaxis: [
              {
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#dfdfdf'
                },
                labels: {
                  style: {
                    colors: '#585d5f',
                  }
                },
                title: {
                  style: {
                    color: '#585d5f',
                  }
                },
                tooltip: {
                  enabled: true
                }
              },
              {
                seriesName: 'Area (sqm)',
                opposite: false,
                axisTicks: {
                  show: false,
                },
                axisBorder: {
                  show: false
                },
                labels: {
                  show: false,
                },
              },
              {
                seriesName: 'Entities',
                opposite: true,
                axisTicks: {
                  show: true,
                },
                axisBorder: {
                  show: true,
                  color: '#dfdfdf'
                },
                labels: {
                  style: {
                    colors: '#585d5f',
                  },
                },
                title: {
                  style: {
                    color: '#585d5f',
                  }
                }
              },
            ],
            tooltip: {
              fixed: {
                enabled: true,
                position: 'topRight', // topRight, topLeft, bottomRight, bottomLeft
                offsetY: 30,
                offsetX: 60
              },
            },
            legend: {
              horizontalAlign: 'left',
              position: 'top',
              offsetX: 40,
              markers: {
                radius: 2
              }
            }
          },
    };

  return (
    <div className="App">
      <Chart
            options={opt.options}
            series={opt.series}
            type="line"
            width="400"
        />
    </div>
  );
}

export default MultipleYAxisChart;