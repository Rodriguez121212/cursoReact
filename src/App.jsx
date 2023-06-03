// Dependencies
import { createRoot } from 'react-dom/client';
import { SearchParams } from './components/SearchParams';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Details } from './components/Details';

const App = () => (
  <div>
    <BrowserRouter>
      <header>
        <Link to="/">Adopt me!!!</Link>
      </header>
      <Routes>
        <Route path="/details/:id" element={<Details />}></Route>
        <Route path="/" element={<SearchParams />}></Route>
      </Routes>
    </BrowserRouter>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
