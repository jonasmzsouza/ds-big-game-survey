import './styles.css';

import ReactApexChart from 'react-apexcharts';
import { pieOptions } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <div className="pie-chart-card">
      <h2 className="pie-chart-title">{name}</h2>
      <div className="chart-container">
        <ReactApexChart
          options={{ ...pieOptions, labels: labels }}
          type="donut"
          height={260}
          width={260}
          series={series}
        />
      </div>
    </div>
  );
}

export default PieChartCard;
