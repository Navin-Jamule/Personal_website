// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import { Helmet } from 'react-helmet';
// import { ThemeProvider } from './context/ThemeContext.jsx';
// import Header from './components/Header.jsx';
// import Footer from './components/Footer.jsx';
//
// import HomePage from './pages/HomePage.jsx';
// import AboutPage from './pages/AboutPage.jsx';
// import ExperiencePage from './pages/ExperiencePage.jsx';
// import ProjectsPage from './pages/ProjectsPage.jsx';
// import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
// import SkillsPage from './pages/SkillsPage.jsx';
// import CertificationsPage from './pages/CertificationsPage.jsx';
// import ContactPage from './pages/ContactPage.jsx';
// import ScrollToTop from './components/ScrollToTop';
//
// const ScrollToHash = () => {
//   const { hash } = useLocation();
//
//   useEffect(() => {
//     if (hash) {
//       setTimeout(() => {
//         const id = hash.replace('#', '');
//         const element = document.getElementById(id);
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth' });
//         }
//       }, 100);
//     } else {
//       window.scrollTo(0, 0);
//     }
//   }, [hash]);
//
//   return null;
// };
//
// const PortfolioPage = () => {
//   return (
//     <div className="flex flex-col w-full">
//       <Helmet>
//         <title>Navin Jamule | Data Science & AI/ML Engineer</title>
//       </Helmet>
//       <HomePage />
//       <AboutPage />
//       <ExperiencePage />
//       <ProjectsPage />
//       <SkillsPage />
//       <CertificationsPage />
//       <ContactPage />
//     </div>
//   );
// };
//
// // function App() {
// //   return (
// //     <ThemeProvider>
// //       <Router>
// //         <ScrollToHash />
// //         <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
// //           <Header />
// //           <main className="flex-grow flex flex-col">
// //             <Routes>
// //               <Route path="/" element={<PortfolioPage />} />
// //               <Route path="/projects/:slug" element={<ProjectDetailPage />} />
// //               <Route path="*" element={
// //                 <div className="flex-grow flex items-center justify-center py-32">
// //                   <div className="text-center">
// //                     <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
// //                     <a href="/" className="text-primary hover:underline">Back to Home</a>
// //                   </div>
// //                 </div>
// //               } />
// //             </Routes>
// //           </main>
// //           <Footer />
// //         </div>
// //       </Router>
// //     </ThemeProvider>
// //   );
// // }
//
// function App() {
//   return (
//     <ThemeProvider>
//       <Router>
//         <ScrollToHash />
//         <ScrollToTop />  {/* ✅ Add this */}
//         <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
//           <Header />
//           <main className="flex-grow flex flex-col">
//             <Routes>
//               <Route path="/" element={<PortfolioPage />} />
//               <Route path="/projects/:slug" element={<ProjectDetailPage />} />
//               ...
//             </Routes>
//           </main>
//           <Footer />
//         </div>
//       </Router>
//     </ThemeProvider>
//   );
// }
//
// export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import ProjectDetailPage from './pages/ProjectDetailPage.jsx';
import SkillsPage from './pages/SkillsPage.jsx';
import CertificationsPage from './pages/CertificationsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import ScrollToTop from './components/ScrollToTop';

const ScrollToHash = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    // ❌ Removed the else window.scrollTo(0,0) — ScrollToTop handles this
  }, [hash, pathname]);

  return null;
};

const PortfolioPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Navin Jamule | Data Science & AI/ML Engineer</title>
      </Helmet>
      <HomePage />
      <AboutPage />
      <ExperiencePage />
      <ProjectsPage />
      <SkillsPage />
      <CertificationsPage />
      <ContactPage />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <ScrollToHash />
        <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
          <Header />
          <main className="flex-grow flex flex-col">
            <Routes>
              <Route path="/" element={<PortfolioPage />} />
              <Route path="/projects/:slug" element={<ProjectDetailPage />} />
              <Route path="*" element={
                <div className="flex-grow flex items-center justify-center py-32">
                  <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                    <a href="/" className="text-primary hover:underline">Back to Home</a>
                  </div>
                </div>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;