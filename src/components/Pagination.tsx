import classNames from 'classnames';
import { FC } from 'react';
import MyButton from './UI/button/MyButton';

interface PaginationProps {
  totalPages: number;
  searchPage: number;
  onClick: (e: React.SyntheticEvent, isLeft: boolean) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, searchPage, onClick }) => {
  return (
    <div className={classNames('center-info', 'pagination')}>
      <MyButton
        data-testid="prev-page-button"
        onClick={(e: React.SyntheticEvent) => onClick(e, true)}
      >
        {'<'}
      </MyButton>
      <span>{`${searchPage} / ${totalPages}`}</span>
      <MyButton
        data-testid="next-page-button"
        onClick={(e: React.SyntheticEvent) => onClick(e, false)}
      >
        {'>'}
      </MyButton>
    </div>
  );
};

export default Pagination;
