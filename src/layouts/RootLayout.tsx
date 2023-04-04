import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Online-store</h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="forms">Forms</NavLink>
          <NavLink to="*">404</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
