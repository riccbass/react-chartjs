import React from "react";
import { Bar } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

//vejo os docs de defaults no chart js

// parei em 14:27

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              fill: false,
              borderColor: "rgb(255, 99, 132)",
              backgroundColor: "rgba(255, 99, 132, 0.5)",
            },
            {
              label: "# of Votes",
              data: [4, 7, 13, 9, 12, 5],
              fill: false,
              borderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
          ],
        }}
        height={400}
        options={{
          interaction: {
            mode: "index",
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontSize: 10,
              },
            },
            x: {
              stacked: true,
            },
          },
          legend: {
            labels: {
              fontSize: 12,
            },
          },
        }}
      />
    </div>
  );
};

export default BarChart;
