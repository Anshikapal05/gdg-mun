import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import FrontPage from "./pages/FrontPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import AddressalsPage from "./pages/AddressalsPage.jsx";
import CommitteesPage from "./pages/CommitteesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GuidelinesPage from "./pages/GuidelinesPage.jsx"
import MediaPage from "./pages/MediaPage.jsx";
function App() {
  const location = useLocation();

  // Check if current route is front page
  const isFrontPage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {!isFrontPage && <Navbar />}   {/* Hide Navbar on FrontPage */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/addressals" element={<AddressalsPage />} />
          <Route path="/committees" element={<CommitteesPage />} />
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/media" element={<MediaPage/>} />
        </Routes>
        

      </main>
      {!isFrontPage && <Footer />}   {/* Hide Footer on FrontPage */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
