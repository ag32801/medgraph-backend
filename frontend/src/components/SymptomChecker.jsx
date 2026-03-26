import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { checkSymptoms, fetchSymptoms } from '../services/api';
import { fetchMedicinesByDisease } from '../services/medicineService';

function SymptomChecker() {
    const [symptoms, setSymptoms] = useState([]);
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [medicinesMap, setMedicinesMap] = useState({});
    const [loadingMedicines, setLoadingMedicines] = useState({});

    useEffect(() => {
        const loadSymptoms = async () => {
            try {
                const data = await fetchSymptoms();
                console.log('Symptoms loaded:', data);
                const formatted = data.map(s => ({
                    value: s.name || s,
                    label: s.name || s
                }));
                setSymptoms(formatted);
            } catch (error) {
                console.error('Failed to load symptoms:', error);
            }
        };
        loadSymptoms();
    }, []);

    const handleCheck = async () => {
        if (selectedSymptoms.length === 0) return;

        setLoading(true);
        try {
            const symptomNames = selectedSymptoms.map(s => s.value);
            console.log('Sending symptoms:', symptomNames);
            const results = await checkSymptoms(symptomNames);
            console.log('Results:', results);
            setSuggestions(results);
            setMedicinesMap({});
        } catch (error) {
            console.error('Error checking symptoms:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMedicinesForDisease = async (diseaseName) => {
        if (medicinesMap[diseaseName]) return;
        if (loadingMedicines[diseaseName]) return;

        setLoadingMedicines(prev => ({ ...prev, [diseaseName]: true }));
        try {
            const medicines = await fetchMedicinesByDisease(diseaseName);
            setMedicinesMap(prev => ({ ...prev, [diseaseName]: medicines }));
        } catch (error) {
            console.error('Error fetching medicines:', error);
        } finally {
            setLoadingMedicines(prev => ({ ...prev, [diseaseName]: false }));
        }
    };

    const customStyles = {
        control: (base) => ({
            ...base,
            minHeight: '44px',
            borderRadius: '12px',
            borderColor: '#e2e8f0',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#3b82f6'
            }
        }),
        menu: (base) => ({
            ...base,
            borderRadius: '12px',
            overflow: 'hidden'
        }),
        option: (base, state) => ({
            ...base,
            backgroundColor: state.isFocused ? '#eef2ff' : 'white',
            color: '#1e293b'
        })
    };

    return (
        <div className="symptom-checker">
            <h2>Symptom Checker</h2>

            <div className="select-container">
                <label className="label">Select your symptoms:</label>
                <Select
                    options={symptoms}
                    isMulti
                    value={selectedSymptoms}
                    onChange={setSelectedSymptoms}
                    placeholder="Search and select symptoms..."
                    styles={customStyles}
                />
            </div>

            <div className="selected-count">
                <p>Selected symptoms:</p>
                <strong>{selectedSymptoms.length}</strong>
            </div>

            <button
                className="check-button"
                onClick={handleCheck}
                disabled={selectedSymptoms.length === 0 || loading}
            >
                {loading ? 'Checking...' : 'Check Symptoms'}
            </button>

            {suggestions.length > 0 && (
                <div className="results-section">
                    <h3>📋 Possible diseases:</h3>
                    <div>
                        {suggestions.map((disease, index) => (
                            <div
                                key={index}
                                className="disease-card"
                                onClick={() => fetchMedicinesForDisease(disease.diseaseName)}
                            >
                                <h4>{disease.diseaseName}</h4>
                                <p><strong>Matched symptoms:</strong> {disease.matchedSymptoms.join(', ')}</p>
                                <p><strong>Match count:</strong> {disease.matchCount}</p>

                                {/* Medicine Suggestion */}
                                {medicinesMap[disease.diseaseName] && medicinesMap[disease.diseaseName].length > 0 && (
                                    <div className="medicine-suggestion">
                                        <h5>💡 SUGGESTION</h5>
                                        <p>Based on your symptoms, you might find these medications helpful for {disease.diseaseName}:</p>
                                        <ul className="medicine-list">
                                            {medicinesMap[disease.diseaseName].map((medicine, idx) => (
                                                <li key={idx}>
                                                    <span className="medicine-icon">💊</span>
                                                    <span>{medicine.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="disclaimer">
                                            ⚕️ Always consult a healthcare professional before taking medication
                                        </div>
                                    </div>
                                )}

                                {loadingMedicines[disease.diseaseName] && (
                                    <div className="loading-medicines">
                                        ⏳ Loading medicines...
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default SymptomChecker;