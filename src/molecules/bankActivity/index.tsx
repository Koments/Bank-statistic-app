import { DataBank } from "./types";
import { BankActivityStyles } from "./styled-components";

import { Doughnut } from "react-chartjs-2";
import { Chart, Tooltip } from "chart.js";

Chart.register(Tooltip);

const data = {
  datasets: [
    {
      data: [100, 0],
      backgroundColor: ["rgba(17, 20, 61, 1)", "#dbdcec"],
      borderColor: ["rgba(17, 20, 61, 1)", "#dadbeb"],
      borderWidth: 1,
      boxShadow: "#dbdcec",
    },
  ],
};

const options = {
  legend: {
    display: false,
  },
  tooltips: {
    callbacks: {
      label: function (tooltipItem: { yLabel: any }) {
        return tooltipItem.yLabel;
      },
    },
  },
} as any;

export function BankActivity({ dataBank }: DataBank) {
  return (
    <BankActivityStyles>
      <div>
        <div className="title">Bank Activity</div>
      </div>
      {dataBank.map((bank, index) => {
        return (
          <div key={index}>
            <div className="card">
              <div className="card-info">
                <img className="bank-icon" src={`${bank.icon}`} alt="" />
                <div className="title">{bank.title}</div>
                <div className="profit ">% {bank.progress}</div>
              </div>
              <div className="doughnut">
                <Doughnut
                  data={{
                    datasets: [
                      {
                        ...data.datasets[0],
                        data: [bank.progress, 100 - bank.progress],
                      },
                    ],
                  }}
                  options={options}
                />
              </div>
            </div>
          </div>
        );
      })}
    </BankActivityStyles>
  );
}
