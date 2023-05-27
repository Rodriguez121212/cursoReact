// Dependencies
import { createRoot } from 'react-dom/client';
import { SearchParams } from './components/SearchParams';
import { Pet } from './components/Pet';
const App = () => (
  <div>
    <h1>Adopt me!!!</h1>
    <SearchParams />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
