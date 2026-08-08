import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { BranchesPage } from './pages/BranchesPage';
import { PartnersPage } from './pages/PartnersPage';
import { CareersPage } from './pages/CareersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactUsPage } from './pages/ContactUsPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-[#FBF9F5]">
        <Navbar lang={lang} setLang={setLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage lang={lang} />} />
            <Route path="/about-us" element={<AboutUsPage lang={lang} />} />
            <Route path="/branches" element={<BranchesPage lang={lang} />} />
            <Route path="/partners" element={<PartnersPage lang={lang} />} />
            <Route path="/careers" element={<CareersPage lang={lang} />} />
            <Route path="/news" element={<NewsPage lang={lang} />} />
            <Route path="/contact-us" element={<ContactUsPage lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </BrowserRouter>
  );
}

export default App;
