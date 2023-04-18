import { MangaSearchData } from '@/API/ProductService';
import './ModalMangaItem.scss';
import getStrFromArray from '@/utils/mangaDataHandler';
import classNames from 'classnames';
import { ReactComponent as Star } from '@/assets/star.svg';
import { ReactComponent as Close } from '@/assets/close.svg';

type Modal = {
  active: boolean;
  setActive: (val: boolean) => void;
  product: MangaSearchData | null;
};

const ModalMangaItem = ({ active, setActive, product }: Modal) => {
  const {
    authors,
    title,
    images: {
      jpg: { image_url },
    },
    genres,
    synopsis,
    title_japanese,
    score,
  } = product || ({ images: { jpg: {} } } as MangaSearchData);
  const genresStr = genres ? getStrFromArray(genres) : '';
  const authorsStr = authors ? getStrFromArray(authors) : '';
  return (
    product && (
      <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
        <div className={'modal-content'} onClick={(e) => e.stopPropagation()}>
          <div className={classNames('modal-text', 'modal-title')}>
            {title}
            {` (${title_japanese})`}
          </div>
          <div className={classNames('modal-text', 'modal-score')}>
            <Star className="modal-star" />
            {score}
          </div>
          <div className="modal-text">{authorsStr}</div>
          <div className="modal-text">{genresStr}</div>
          <div className={classNames('modal-text', 'modal-synopsis')}>{synopsis}</div>
          <div
            className="modal-image"
            style={{ background: `url(${image_url}) 0% 0% / cover` }}
          ></div>
          <Close
            data-testid={`closeBtn`}
            className="modal-close"
            onClick={() => setActive(false)}
          />
        </div>
      </div>
    )
  );
};

export default ModalMangaItem;
