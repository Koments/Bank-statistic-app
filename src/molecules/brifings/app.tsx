import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { BrifingsStyles } from "./styled-components";

Chart.register(...registerables);
  const barChartData = {
    labels: ["Aproval", "Briefing", "Sign", "Payment", "Notary"],
    datasets: [
      {
        data: [76, 60, 20, 30, 80],
        label: "Infected People",
        borderColor: "#3333ff",
        backgroundColor: [
          "rgba(17, 20, 61, 1)",
          "rgba(255, 141, 175, 1)",
          "rgba(158, 156, 255, 1)",
          "rgba(187, 186, 255, 1)",
          "rgba(201, 255, 235, 1)",
          "rgba(255, 214, 214, 1)",
          "rgba(85, 111, 246, 1)",
        ],
        fill: true,
      },
    ],
  };
  var options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
        display: false,
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#c6c8ca",
        },
      },
    },
  } as any;
export function Brifings() {


  return (
    <BrifingsStyles>
      <div className="brifings-title">
        <div>Briefings</div>
        <h2>728</h2>
      </div>
      <div className="brifing-bar">
        <Bar width={130} height={50} options={options} data={barChartData} />
      </div>
    </BrifingsStyles>
  );
}
