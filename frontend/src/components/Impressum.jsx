import React from 'react';
import './LegalPages.css';

const Impressum = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Impressum</h1>
                <p>Angaben gemäß § 5 TMG</p>

                <p className="demo-note">
                    <strong>Hinweis:</strong> Dies ist eine Demo-Anwendung zu Demonstrationszwecken.
                    Die hier genannten Angaben sind fiktiv und nicht kommerziell genutzt.
                </p>

                <h2>Verantwortlich für den Inhalt</h2>
                <p>
                    SymptomChecker Demo<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                </p>

                <h2>Kontakt</h2>
                <p>
                    Telefon: +49 123 4567890<br />
                    E-Mail: info@symptomchecker-demo.de
                </p>

                <h2>Haftungsausschluss</h2>
                <p>
                    Die Inhalte dieser Webseite dienen ausschließlich Informationszwecken
                    und ersetzen keine ärztliche Beratung. Bei gesundheitlichen Beschwerden
                    konsultieren Sie bitte einen Arzt.
                </p>

                <h2>Urheberrecht</h2>
                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>

                <h2>Haftung für Links</h2>
                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch
                    keine Gewähr übernehmen.
                </p>
            </div>
        </div>
    );
};

export default Impressum;