import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AIPPMPage from "./pages/committees/AIPPMPage.jsx"
import UNHRCPage from "./pages/committees/UNHRCPage.jsx"
import HSRAPage from "./pages/committees/HSRAPage.jsx"
import UNSCPage from "./pages/committees/UNSCPage.jsx"
import UNWomenPage from "./pages/committees/UNWomenPage.jsx"
import LokSabhaPage from "./pages/committees/LokSabhaPage.jsx"
import DumbartonOaksPage from "./pages/committees/DumbartonOaksPage.jsx"
import JCCPage from "./pages/committees/JCCPage.jsx"
import AkbarIbadatKhanaPage from "./pages/committees/AkbarIbadatKhanaPage.jsx"
import WTOPage from "./pages/committees/WTOPage.jsx"
import UNGAESSPage from "./pages/committees/UNGAESSPage.jsx"
import IPCPage from "./pages/committees/IPCPage.jsx"
import FrontPage from "./pages/FrontPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
// import AddressalsPage from "./pages/AddressalsPage.jsx";
// import CommitteesPage from "./pages/CommitteesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import GuidelinesPage from "./pages/GuidelinesPage.jsx"
import MediaPage from "./pages/MediaPage.jsx";
import PrincipalMessage from "./pages/PrincipalMessage";
import SecretaryMessage from "./pages/SecretaryMessage";
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
          {/* <Route path="/addressals" element={<AddressalsPage />} />
          <Route path="/committees" element={<CommitteesPage />} /> */}
          <Route path="/guidelines" element={<GuidelinesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/addressals/principal" element={<PrincipalMessage />} />
          <Route path="/addressals/secretary" element={<SecretaryMessage />} />
          <Route path="/committees/aippm" element={<AIPPMPage />} />
<Route path="/committees/unhrc" element={<UNHRCPage />} />
<Route path="/committees/hsra" element={<HSRAPage />} />
<Route path="/committees/unsc" element={<UNSCPage />} />
<Route path="/committees/unwomen" element={<UNWomenPage />} />
<Route path="/committees/lok-sabha" element={<LokSabhaPage />} />
<Route path="/committees/dumbarton-oaks" element={<DumbartonOaksPage />} />
<Route path="/committees/jcc" element={<JCCPage />} />
<Route path="/committees/akbars-ibadat-khana" element={<AkbarIbadatKhanaPage />} />
<Route path="/committees/wto" element={<WTOPage />} />
<Route path="/committees/unga-ess" element={<UNGAESSPage />} />
<Route path="/committees/ipc" element={<IPCPage />} />

          <Route path="/media" element={<MediaPage/>} />
        </Routes>
        

      </main>
      {!isFrontPage && <Footer />}   {/* Hide Footer on FrontPage */}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
