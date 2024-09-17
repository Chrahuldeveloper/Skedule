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
  const AppointmentAnalytics = {
    labels: ["Total ", "Completed ", "Cancelled ", "Upcoming "],
    datasets: [
      {
        label: "Your Appointments",
        data: [50, 40, 5, 10],
        borderColor: "#6746ed",
        pointBackgroundColor: "#6746ed",
        pointBorderColor: "#fff",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <div className="bg-[#111111] p-3 md:p-7 border-[1px] rounded-md border-zinc-900 lg:ml-96 w-[95vw] sm:w-[60vw] mx-auto lg:mx-0 overflow-y-scroll ">
      <Line data={AppointmentAnalytics} />
    </div>
  );
}
