import React from 'react';
import './LegalPages.css';

const Datenschutz = () => {
    return (
        <div className="legal-page">
            <div className="legal-container">
                <h1>Datenschutzerklärung</h1>

                <p className="demo-note">
                    <strong>Hinweis:</strong> Dies ist eine Demo-Anwendung zu Demonstrationszwecken.
                    Es werden keine echten personenbezogenen Daten erhoben oder verarbeitet.
                </p>

                <h2>1. Datenschutz auf einen Blick</h2>
                <h3>Allgemeine Hinweise</h3>
                <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                    personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                    Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>

                <h3>Datenerfassung auf dieser Website</h3>
                <p>
                    <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                    Die Kontaktdaten finden Sie im Impressum.
                </p>

                <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
                <h3>Datenschutz</h3>
                <p>
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                    gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                </p>

                <h3>Hinweis zur verantwortlichen Stelle</h3>
                <p>
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                    SymptomChecker Demo<br />
                    Musterstraße 123<br />
                    12345 Musterstadt<br />
                    Deutschland
                </p>

                <h2>3. Datenerfassung auf dieser Website</h2>
                <h3>Server-Log-Dateien</h3>
                <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten
                    Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul>
                    <li>Browsertyp und Browserversion</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                </ul>
                <p>
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                </p>

                <h2>4. Medizinische Daten</h2>
                <p>
                    Diese Website verarbeitet keine medizinischen Patientendaten. Die Symptomeingabe
                    erfolgt anonym und wird nicht gespeichert. Die Ergebnisse dienen ausschließlich
                    Informationszwecken und ersetzen keine ärztliche Diagnose.
                </p>

                <h2>5. Ihre Rechte</h2>
                <p>
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                    Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Außerdem haben Sie
                    ein Recht auf Berichtigung oder Löschung dieser Daten.
                </p>
            </div>
        </div>
    );
};

export default Datenschutz;