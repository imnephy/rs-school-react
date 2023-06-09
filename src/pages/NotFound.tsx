import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { PROJECT_TITLE } from '@/utils/variables';

const NotFound = () => {
  useEffect(() => {
    document.title = `404 | ${PROJECT_TITLE}`;
  }, []);

  return (
    <div className="wrapper">
      <div className="not-found">
        <h1>Page not found (×﹏×)</h1>
        <Link to={'/'}>Go home</Link>
      </div>
    </div>
  );
};

export default NotFound;
