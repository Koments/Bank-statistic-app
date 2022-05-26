import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { LocalBanksSpreadCss } from "./styled-components";

ChartJS.register(ArcElement, Tooltip);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [120, 19, 3, 5, 2, 12],
      backgroundColor: [
        "rgba(17, 20, 61, 1)",
        "rgba(255, 141, 175, 1)",
        "rgba(158, 156, 255, 1)",
        "rgba(187, 186, 255, 1)",
        "rgba(201, 255, 235, 1)",
        "rgba(255, 214, 214, 1)",
        "rgba(85, 111, 246, 1)",
      ],
      borderColor: [
        "rgba(17, 20, 61, 1)",
        "rgba(255, 141, 175, 1)",
        "rgba(158, 156, 255, 1)",
        "rgba(187, 186, 255, 1)",
        "rgba(201, 255, 235, 1)",
        "rgba(255, 214, 214, 1)",
        "rgba(85, 111, 246, 1)",
      ],
      borderWidth: 1,
      boxShadow: "#901010",
    },
  ],
};

export const option = {
  option: [
    {
      rotation: 180,
    },
  ],
} as any;

export function LocalBanksSpread() {
  return (
    <LocalBanksSpreadCss>
      <div className="doughnut-title">Local Bank Spread</div>
      <div className="doughnut-graphic">
        <div className="doughnut">
          <Doughnut data={data} options={option} />
        </div>
      </div>
    </LocalBanksSpreadCss>
  );
}
