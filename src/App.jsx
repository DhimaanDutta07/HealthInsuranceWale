import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WAFloat from './components/WAFloat'
import Home from './pages/Home'
import About from './pages/About'
import Claims from './pages/Claims'
import ClaimStories from './pages/ClaimStories'
import CalculatorPage from './pages/CalculatorPage'
import Careers from './pages/Careers'
import Blogs from './pages/Blogs'
import FAQs from './pages/FAQs'
import Services from './pages/OurService'
import Disclaimer from './pages/Disclaimer'
import TermsOfUse from './pages/termsofuse'
import PrivacyPolicy from './pages/privacypolicy'
// Import additional pages/logic from Project A here

function App() {
  return (
    <Router>
      <Toaster position="top-center" toastOptions={{ style: { fontFamily: 'DM Sans, sans-serif', borderRadius: '12px' } }} />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<About />} />
        <Route path="/claims" element={<Claims />} />
        <Route path="/claim-stories" element={<ClaimStories />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsofuse" element={<TermsOfUse />} />
        {/* Add any extra routes from Project A */}
      </Routes>
      <WAFloat />
    </Router>
  )
}

export default App