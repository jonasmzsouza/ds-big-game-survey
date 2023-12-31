import './styles.css';
import ReactPaginate from 'react-paginate';
import ArrowIcon from '../ArrowIcon';

type Props = {
  initialPage?: number;
  pageCount: number;
  range: number;
  onChange?: (pageNumber: number) => void;
};

const Pagination = ({ initialPage, pageCount, range, onChange }: Props) => {
  return (
    <ReactPaginate
      initialPage={initialPage}
      pageCount={pageCount}
      pageRangeDisplayed={range}
      marginPagesDisplayed={1}
      containerClassName="pagination-container"
      pageLinkClassName="pagination-item"
      breakClassName="pagination-item"
      activeLinkClassName="pagination-link-active"
      previousClassName="arrow-previous"
      nextClassName="arrow-next"
      activeClassName="arrow-active"
      disabledClassName="arrow-inactive"
      previousLabel={<ArrowIcon data-testid="arrow-previous" />}
      nextLabel={<ArrowIcon data-testid="arrow-next" />}
      onPageChange={(items) => (onChange ? onChange(items.selected) : {})}
    />
  );
};

export default Pagination;
