import React from "react";
import Chart from "react-apexcharts";

function ColumnChart() {
        
    const opt = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
          }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
          }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
          }],
          options: {
            chart: {
              type: 'bar',
              height: 350
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: '70%',
              },
            },
            theme: {
              monochrome: {
                  enabled: true,
                  color: '#0E3860',
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              show: true,
              width: 2,
              colors: ['transparent']
            },
            xaxis: {
              categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
              title: {
                text: '$ (thousands)'
              }
            },
            title: {
              text: "NOI Bridge (K)"
            },
            fill: {
              opacity: 1
            },
            grid: {
              show: false
            },
            tooltip: {
              y: {
                formatter: function (val) {
                  return "$ " + val + " thousands"
                }
              }
            },
            legend: {
              horizontalAlign: 'left',
              position: 'top',
              offsetX: 40
            }
          },
    }

  return (
    <div className="App">
      <Chart
            options={opt.options}
            series={opt.series}
            type="bar"
            width="450"
        />
    </div>
  );
}

export default ColumnChart;