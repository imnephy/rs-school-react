import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import projectTitle from '@/utils/projectTitle';

const NotFound = () => {
  useEffect(() => {
    document.title = `404 | ${projectTitle}`;
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
