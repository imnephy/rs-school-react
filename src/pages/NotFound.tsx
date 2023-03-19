import { Link } from 'react-router-dom';

import { Component } from 'react';

export class NotFound extends Component {
  componentDidMount(): void {
    document.title = `404 | React-store`;
  }
  render() {
    return (
      <div className="not-found">
        <h1>Page not found (×﹏×)</h1>
        <Link to={'/'}>Go home</Link>
      </div>
    );
  }
}

export default NotFound;
