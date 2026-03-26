import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import SymptomChecker from './components/SymptomChecker';
import Impressum from './components/Impressum';
import Datenschutz from './components/Datenschutz';
import CookiePolicy from './components/CookiePolicy';
import './App.css';

// Create a separate Header component to use useNavigate hook
const Header = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <header className="header">
            <h1
                onClick={handleHomeClick}
                style={{ cursor: 'pointer' }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        handleHomeClick();
                    }
                }}
            >
                🏥 MedGraph Medical Dashboard
            </h1>
            <p>AI-Powered Symptom Checker & Medical Data Analysis</p>
        </header>
    );
};

function App() {
    return (
        <BrowserRouter>
            <div className="app-container">
                <Header />

                <main>
                    <Routes>
                        <Route path="/" element={<SymptomChecker />} />
                        <Route path="/impressum" element={<Impressum />} />
                        <Route path="/datenschutz" element={<Datenschutz />} />
                        <Route path="/cookie-policy" element={<CookiePolicy />} />
                    </Routes>
                </main>

                <footer className="footer">
                    <div className="footer-links">
                        <Link to="/impressum">Impressum</Link>
                        <Link to="/datenschutz">Datenschutz</Link>
                        <Link to="/cookie-policy">Cookie-Richtlinie (EU)</Link>
                    </div>
                    <div className="footer-copyright">
                        © {new Date().getFullYear()} MedGraph Medical Dashboard. Alle Rechte vorbehalten.
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;