import React from 'react';
import './LegalPages.css';

const CookiePolicy = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Cookie-Richtlinie (EU)</h1>

                <h2>Was sind Cookies?</h2>
                <p>
                    Cookies sind kleine Textdateien, die auf Ihrem Computer oder mobilen Gerät gespeichert
                    werden, wenn Sie eine Website besuchen. Sie helfen uns, Ihre Präferenzen zu speichern
                    und die Website für Sie zu verbessern.
                </p>

                <h2>Welche Cookies verwenden wir?</h2>

                <h3>Notwendige Cookies</h3>
                <p>
                    Diese Cookies sind für den Betrieb der Website unbedingt erforderlich. Sie ermöglichen
                    grundlegende Funktionen wie die Navigation auf der Seite.
                </p>
                <ul>
                    <li><strong>session_id</strong> – Speichert Ihre aktuelle Sitzung</li>
                </ul>

                <h3>Präferenz-Cookies</h3>
                <p>
                    Diese Cookies speichern Ihre Einstellungen und Vorlieben.
                </p>
                <ul>
                    <li><strong>language</strong> – Speichert Ihre Sprachpräferenz</li>
                </ul>

                <h2>Wie können Sie Cookies verwalten?</h2>
                <p>
                    Sie können Ihre Cookie-Einstellungen in Ihrem Browser anpassen. Die meisten Browser
                    bieten folgende Optionen:
                </p>
                <ul>
                    <li>Alle Cookies akzeptieren</li>
                    <li>Nur notwendige Cookies akzeptieren</li>
                    <li>Cookies blockieren</li>
                    <li>Cookies löschen</li>
                </ul>

                <h2>Verwaltung in gängigen Browsern</h2>
                <ul>
                    <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
                    <li><a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
                    <li><a href="https://support.apple.com/de-de/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
                    <li><a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-loeschen-63947406-40ac-c3b8-1b03-2ab5f3f1d73a" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
                </ul>

                <h2>Kontakt</h2>
                <p>
                    Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns bitte:<br />
                    E-Mail: info@symptomchecker-demo.de
                </p>

                <p className="last-updated">
                    <em>Letzte Aktualisierung: März 2026</em>
                </p>
            </div>
        </div>
    );
};

export default CookiePolicy;