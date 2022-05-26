import { GrowthProps } from "./types";
import { TopEstateStyles } from "./styled-components";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "#e5e4ff",
      borderColor: "#a6a4ff",
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
  elements: {
    line: {
      lineTension: 0.5,
    },
    point: {
      radius: 0,
    },
  },
} as any;
export function TopEstate({ dataGrowth }: GrowthProps) {
  return (
    <TopEstateStyles>
      <div>
        <div className="title">Top Estate</div>
      </div>
      {dataGrowth.map((growth, index) => {
        return (
          <div key={index}>
            <div className="card">
              <div className="card-info">
                <div className="title">{growth.title}</div>
                <div className="line">
                  <Line
                    data={{
                      ...data,
                      datasets: [
                        {
                          ...data.datasets[0],
                          data: growth.pay,
                        },
                      ],
                    }}
                    options={options}
                  />
                </div>
                <div className="profit ">{growth.total} USD</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopEstateStyles>
  );
}
