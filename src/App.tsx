import RootLayout from './layouts/RootLayout';
import { createRoutesFromElements, Route, RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Forms from './pages/Forms';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="forms" element={<Forms />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
