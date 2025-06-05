import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import Header from './components/general/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Announcements from './pages/Announcements';
import About from './pages/About';
import Events from './pages/Events';

function AppContent() {
  const location = useLocation();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  // Initialize GA4 config after consent
  useEffect(() => {
    if (analyticsEnabled && window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        send_page_view: false // Prevent duplicate page views
      });
    }
  }, [analyticsEnabled]);

  // Track page views on route change, only if consented
  useEffect(() => {
    if (analyticsEnabled && window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
        page_title: document.title,
      });
    }
  }, [location, analyticsEnabled]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto my-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Accept Cookies"
        cookieName="littleStarsConsent"
        style={{
          background: '#14b8a6',
          color: 'white',
          fontFamily: 'Comic Neue, sans-serif',
          padding: '1rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        buttonStyle={{
          background: '#facc15',
          color: 'black',
          fontWeight: 'bold',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          fontFamily: 'Comic Neue, sans-serif'
        }}
        expires={150}
        onAccept={() => setAnalyticsEnabled(true)}
      >
        This website uses cookies to enhance your experience and analyze usage.
      </CookieConsent>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;