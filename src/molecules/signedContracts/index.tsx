import { Line } from "react-chartjs-2";

import { SignedContractsStyles } from "./styled-components";
import { Plugins } from "../../atoms/pluginLineOnChart";

const data = {
  labels: ["Jan", "", "Feb", "", "Mar", "", "Apr", "", "May", "", "Jun"],
  datasets: [
    {
      data: [-33, 60, -45, 53, 45, 70, 20, 40, 60, 40, 10],
      borderColor: "rgba(17, 20, 61, 1)",
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
  tooltips: {
    mode: "index",
    intersect: false,
  },
  hover: {
    mode: "index",
    intersect: false,
  },
  interaction: {
    intersect: false,
    mode: "index",
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

export function SignedContracts() {
  return (
    <SignedContractsStyles>
      <div className="line-title">Credits</div>
      <div className="line">
        <Line data={data} options={options} plugins={Plugins} />
      </div>
    </SignedContractsStyles>
  );
}
