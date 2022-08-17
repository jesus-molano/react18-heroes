import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {setDataStats} from "@/heroes/helpers/setDataStats.js";
import {setOptionsStats} from "@/heroes/helpers/setOptionsStats.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const HeroStats = ({powerstats, publisher}) => {
  const data = setDataStats(powerstats, publisher);
  const options = setOptionsStats()

  return (
    <div className="col-lg-6 col-12 mb-3">
      <Bar options={options} data={data} />
    </div>
  )
}
