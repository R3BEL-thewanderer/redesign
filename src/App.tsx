import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import GalaxyBackground from './components/GalaxyBackground';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogsPage from './pages/BlogsPage';
import SpeakersPage from './pages/SpeakersPage';
import TeamPage from './pages/TeamPage';
import TicketsPage from './pages/TicketsPage';
import PartnersPage from './pages/PartnersPage';
import HistoryPage from './pages/HistoryPage';
import FAQsPage from './pages/FAQsPage';

function DynamicBackground() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  if (isHome) {
    return <GalaxyBackground />;
  }

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-[#050510]">
      <img 
        src="/Hero_Section-image.webp" 
        alt="Background" 
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-black/40" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen text-white font-sans selection:bg-white/20 z-0">
        <DynamicBackground />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/speakers" element={<SpeakersPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
