import { NavLink, Outlet } from 'react-router-dom';
import { ReactComponent as GitHub } from '../assets/github.svg';
const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Manga-store</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="forms">Forms</NavLink>
          <NavLink to="*">404</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="footer">
        <hr />
        <div className="footer__info">
          <a href="https://github.com/imnephy/rs-school-react">
            <GitHub />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default RootLayout;
