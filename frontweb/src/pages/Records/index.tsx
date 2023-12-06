import './styles.css';
import { Record } from '../../types/record';
import { SpringPage } from '../../types/vendor/spring';
import { useLoaderData } from 'react-router-dom';
import { formatDate } from '../../utils/formatters';
import Pagination from '../../components/Pagination';
import { useContext } from 'react';
import { PageContext } from '../../PageContext';

const Records = () => {
  const records = useLoaderData() as SpringPage<Record>;
  const { setPageContextData } = useContext(PageContext);

  const handlePageChange = (index: number) => {
    setPageContextData({
      page: index,
    });
  };

  return (
    <div className="page-container">
      <div className="table-responsive">
        <table className="records-table" cellPadding={0} cellSpacing={0}>
          <thead>
            <tr>
              <th>INSTANTE</th>
              <th>NOME</th>
              <th>IDADE</th>
              <th>PLATAFORMA</th>
              <th>GÊNERO</th>
              <th>TÍTULO DO GAME</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(records.content).map(([id, record]) => (
              <tr key={id}>
                <td>{formatDate(record.moment)}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
                <td className="text-secondary">{record.gamePlatform}</td>
                <td>{record.genreName}</td>
                <td className="text-primary">{record.gameTitle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        pageCount={records ? records?.totalPages : 0}
        range={3}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default Records;
