import './styles.css';

import ReactApexChart from 'react-apexcharts';
import { barOptions } from './helpers';
import { BarChartData } from '../../types/bar-chart-data';

type Props = {
  data: BarChartData[];
};

function BarChartCard({ data }: Props) {
  return (
    <div className="bar-chart-card">
      <h1 className="bar-chart-title">Jogos mais Votados</h1>
      <div className="games-container">
        <ReactApexChart
          options={barOptions}
          type="bar"
          height={520}
          width={'100%'}
          series={[{ data: data }]}
        />
      </div>
    </div>
  );
}

export default BarChartCard;
