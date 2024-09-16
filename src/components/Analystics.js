import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Analytics() {
  const CarCondition = {
    labels: [
      "engine",
      "seats",
      "Radiator",
      "Brakes",
      "windows",
      "motor",
      "interior",
      "Seat covers",
    ],
    datasets: [
      {
        label: "Your Appointments",
        data: [9, 3, 4, 8, 5, 7, 3, 8],
        borderColor: "#6746ed",
        pointBackgroundColor: "#6746ed",
        pointBorderColor: "#fff",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-[#111111] p-7 border-[1px] rounded-md border-zinc-900 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll">
      <Line data={CarCondition} />
    </div>
  );
}
