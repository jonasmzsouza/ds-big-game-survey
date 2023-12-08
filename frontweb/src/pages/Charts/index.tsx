import './styles.css';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Filters from '../../components/Filters';
import BarChartCard from '../../components/BarChartCard';
import PieChartCard from '../../components/PieChartCard';
import { BarChartData } from '../../types/bar-chart-data';
import { PieChartData } from '../../types/pie-chart-data';
import { ChartsResponse } from '../../types/charts-response';
import {
  buildBarSeries,
  getPlatformChartData,
  getGenderChartData,
} from '../../helpers';

const initialPieData: PieChartData = {
  labels: [],
  series: [],
};

const Charts = () => {
  const chartsResponse = useLoaderData() as ChartsResponse;

  const [barChartData, setBarCharData] = useState<BarChartData[]>([]);
  const [platformData, setPlatformData] =
    useState<PieChartData>(initialPieData);
  const [genderData, setGenderData] = useState<PieChartData>(initialPieData);

  useEffect(() => {
    const barData = buildBarSeries(
      chartsResponse.games,
      chartsResponse.records.content
    );
    setBarCharData(barData);

    const platformData = getPlatformChartData(chartsResponse.records.content);
    setPlatformData(platformData);

    const genderData = getGenderChartData(chartsResponse.records.content);
    setGenderData(genderData);
  }, [chartsResponse]);

  return (
    <div className="page-container">
      <Filters link="/records" linkText="Ver Tabela" />
      <div className="chart-container">
        <BarChartCard data={barChartData} />
        <div className="side-charts">
          <PieChartCard
            name="Plataformas"
            labels={platformData?.labels}
            series={platformData?.series}
          />
          <PieChartCard
            name="Gêneros"
            labels={genderData?.labels}
            series={genderData?.series}
          />
        </div>
      </div>
    </div>
  );
};

export default Charts;
