import { CreditsСhartCss } from "./styled-components";
import { Line } from "react-chartjs-2";

import {
  Chart,
  ArcElement,
  Tooltip,
  LineElement,
  PointElement,
  LinearScale,
  Filler,
  Title,
  CategoryScale,
} from "chart.js";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  Filler,
  Title,
  CategoryScale,
  ArcElement,
  Tooltip
);

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#d8ffef",
      borderColor: "#6feab6",
      pointHoverBorderColor: "#000",
      pointHoverBackgroundColor: "#000",
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

  lineHeightAnnotation: {
    color: "#000",
    shadow: true,
  },
  elements: {
    line: {
      lineTension: 0.5,
    },
    point: {
      radius: 0,
    },
  },
} as any;

export function Credits() {
  return (
    <CreditsСhartCss>
      <div className="line-title">Credits</div>
      <div className="line">
        <Line data={data} options={options} />
      </div>
    </CreditsСhartCss>
  );
}
