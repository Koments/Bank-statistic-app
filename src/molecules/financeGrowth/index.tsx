import { FinanceGrowthStyles } from "./styled-components";
import { dataFinanceGrowthProps } from "./type";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#d8ffef",
      borderColor: "#6feab6",
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
      label: {
        display: false,
      },
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  hover: {
    intersect: false,
  },
  interaction: {
    mode: "nearest",
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

export function FinanceGrowth({ dataFinanceGrowth }: dataFinanceGrowthProps) {
  return (
    <FinanceGrowthStyles>
      <div className="container-statistic">
        <div className="title">Finance Growth</div>
        {dataFinanceGrowth.map((growth, index) => {
          var bgColor2021 =
            Math.sign(growth.statistic2021) === 1 ? "#34d6af" : "#ff8daf";
          var bgColor2022 =
            Math.sign(growth.statistic2022) === 1 ? "#34d6af" : "#ff8daf";
          return (
            <div key={index}>
              <div className="statistic">
                <div className="mark-container">
                  <div className="year">2021</div>
                  <div
                    className="mark"
                    style={{ backgroundColor: bgColor2021 }}
                  >
                    {growth.statistic2021}%
                  </div>
                </div>
                <div className="mark-container">
                  <div className="year">2022</div>
                  <div
                    className="mark"
                    style={{ backgroundColor: bgColor2022 }}
                  >
                    {growth.statistic2022}%
                  </div>
                </div>
              </div>
              <div className="chart">
                <Line
                  data={{
                    ...data,
                    datasets: [
                      {
                        ...data.datasets[0],
                        data: growth.randomStatistic,
                        backgroundColor: "#e6e4ff",
                        borderColor: "#a6a5ef",
                      },
                    ],
                  }}
                  options={options}
                  height={80}
                />
              </div>
            </div>
          );
        })}
      </div>
    </FinanceGrowthStyles>
  );
}
