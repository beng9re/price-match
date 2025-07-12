import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import History from './pages/History';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
