import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page not found (×﹏×)</h1>
      <Link to={'/'}>Go home</Link>
    </div>
  );
}

export default NotFound;
