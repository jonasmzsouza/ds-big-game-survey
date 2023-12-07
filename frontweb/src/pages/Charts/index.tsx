import './styles.css';
import Filters from '../../components/Filters';

const Charts = () => (
  <div className="page-container">
    <Filters link="/records" linkText="Ver Tabela" />
    <div className="chart-container">
      <div className="top-related">
        <h1 className="top-related-title">Jogos mais Votados</h1>
        <div className="games-container"></div>
      </div>
      <div className="charts">
        <div className="side-chart platform-chart">
          <h2 className='chart-title'>Plataformas</h2>
        </div>
        <div className="side-chart gender-chart">
          <h2 className='chart-title'>Gêneros</h2>
        </div>
      </div>
    </div>
  </div>
);

export default Charts;
