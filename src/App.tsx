import store from './app/store';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ReactComponent as GitHub } from '@/assets/github.svg';
type PageModule = { default: React.ComponentType };
type Pages = Record<string, PageModule>;

// Auto generates routes from files under ./pages
// https://vitejs.dev/guide/features.html#glob-import
const pages: Pages = import.meta.glob('./pages/*.tsx', { eager: true });

const routes = Object.keys(pages).map((path) => {
  const name = (path.match(/\.\/pages\/(.*)\.tsx$/) as string[])[1];
  return {
    name,
    path: name === 'Home' ? '/' : `/${name.toLowerCase()}`,
    component: pages[path].default,
  };
});

export function App() {
  return (
    <Provider store={store}>
      <div className="root-layout">
        <header>
          <nav>
            <h1>Manga-store</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="forms">Forms</NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            {routes.map(({ path, component: RouteComp }) => {
              return <Route key={path} path={path} element={<RouteComp />}></Route>;
            })}
          </Routes>
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
    </Provider>
  );
}

export default App;
