import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from './pages/Search';
import History from './pages/History';
import Onboarding from './Onboarding';

function App() {
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem('hasSeenOnboarding');
    if (!seen) {
      setShowOnboarding(true);
    }
  }, []);

  return (
    <>
      {showOnboarding && <Onboarding onFinish={() => setShowOnboarding(false)} />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
