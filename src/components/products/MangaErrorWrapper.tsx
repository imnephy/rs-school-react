import { FC, PropsWithChildren } from 'react';

const MangaErrorWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="center-info" style={{ marginTop: '150px' }}>
        {children}
      </div>
    </div>
  );
};

export default MangaErrorWrapper;
