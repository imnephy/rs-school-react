import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = `404 | Online-store`;
  }, []);
  return (
    <div className="not-found">
      <h1>Page not found (×﹏×)</h1>
      <Link to={'/'}>Go home</Link>
    </div>
  );
};

export default NotFound;
