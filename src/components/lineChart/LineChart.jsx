import React from 'react';
import { Line } from 'react-chartjs-2';
import './line-chart.scss';

function LineChart({ timeStamps = [], metric = [] }) {
  const negative = metric.some((e) => e < 0);
  return (
    <div className="line-chart-container">
      <Line
        data={{
          labels: timeStamps,
          datasets: [
            {
              label: `Sıcaklık (°C)`,
              data: metric,
              borderColor: 'orangered',
              pointBackgroundColor: 'black',
              borderWidth: 1,
              backgroundColor: 'rgba(200,200,0, 0.4)',
              pointBorderColor: 'white',
            },
          ],
        }}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  suggestedMax: 50,
                  suggestedMin: negative ? -20 : 0,
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LineChart;