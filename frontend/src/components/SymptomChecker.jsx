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
            // Clear previous medicines when new results come
            setMedicinesMap({});
        } catch (error) {
            console.error('Error checking symptoms:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchMedicinesForDisease = async (diseaseName) => {
        console.log("=== Clicked on disease ===", diseaseName); // Add this

        if (medicinesMap[diseaseName]) {
            console.log("Already loaded medicines for:", diseaseName);
            return;
        }
        if (loadingMedicines[diseaseName]) {
            console.log("Already loading medicines for:", diseaseName);
            return;
        }

        console.log("Fetching medicines for:", diseaseName);
        setLoadingMedicines(prev => ({ ...prev, [diseaseName]: true }));
        try {
            const medicines = await fetchMedicinesByDisease(diseaseName);
            console.log("Medicines received:", medicines); // Add this
            console.log("Number of medicines:", medicines.length); // Add this
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
            minHeight: '42px',
        }),
    };

    return (
        <div style={{ padding: '20px', maxWidth: '600px' }}>
            <h2>Symptom Checker</h2>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
                    Select your symptoms:
                </label>
                <Select
                    options={symptoms}
                    isMulti
                    value={selectedSymptoms}
                    onChange={setSelectedSymptoms}
                    placeholder="Search and select symptoms..."
                    styles={customStyles}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <p><strong>Selected symptoms:</strong> {selectedSymptoms.length}</p>
                <button
                    onClick={handleCheck}
                    disabled={selectedSymptoms.length === 0 || loading}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: selectedSymptoms.length === 0 ? '#ccc' : '#007bff',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: selectedSymptoms.length === 0 ? 'not-allowed' : 'pointer',
                        fontSize: '16px'
                    }}
                >
                    {loading ? 'Checking...' : 'Check Symptoms'}
                </button>
            </div>

            {suggestions.length > 0 && (
                <div>
                    <h3>📋 Possible diseases:</h3>
                    <div style={{ display: 'grid', gap: '15px' }}>
                        {suggestions.map((disease, index) => (
                            <div
                                key={index}
                                style={{
                                    border: '1px solid #ddd',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    backgroundColor: '#f9f9f9',
                                    cursor: 'pointer',
                                    transition: 'box-shadow 0.2s'
                                }}
                                onClick={() => fetchMedicinesForDisease(disease.diseaseName)}
                                onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'}
                                onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                            >
                                <h4 style={{ margin: '0 0 10px 0' }}>{disease.diseaseName}</h4>
                                <p><strong>Matched symptoms:</strong> {disease.matchedSymptoms.join(', ')}</p>
                                <p><strong>Match count:</strong> {disease.matchCount}</p>

                                {/* Medicines section */}
                                {medicinesMap[disease.diseaseName] && medicinesMap[disease.diseaseName].length > 0 && (
                                    <div style={{
                                        marginTop: '15px',
                                        padding: '15px',
                                        background: 'linear-gradient(135deg, #f0f9ff 0%, #e6f4ff 100%)',
                                        borderRadius: '12px',
                                        border: '1px solid #bae6fd',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                    }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                            <span style={{ fontSize: '20px' }}></span>
                                            <strong style={{ fontSize: '16px', color: '#0369a1' }}>Suggestion:</strong>
                                        </div>
                                        <p style={{ margin: '0 0 10px 0', color: '#0c4a6e', fontStyle: 'italic' }}>
                                            Based on your symptoms, you might find these medications helpful for {disease.diseaseName}:
                                        </p>
                                        <ul style={{ margin: '8px 0 0 20px', paddingLeft: '0', listStyleType: 'none' }}>
                                            {medicinesMap[disease.diseaseName].map((medicine, idx) => (
                                                <li key={idx} style={{
                                                    marginBottom: '8px',
                                                    padding: '6px 0 6px 24px',
                                                    position: 'relative'
                                                }}>
                    <span style={{
                        position: 'absolute',
                        left: '0',
                        color: '#0ea5e9',
                        fontWeight: 'bold'
                    }}>💊</span>
                                                    <span style={{ color: '#334155' }}>{medicine.name}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div style={{
                                            marginTop: '12px',
                                            fontSize: '12px',
                                            color: '#6b7280',
                                            borderTop: '1px dashed #bae6fd',
                                            paddingTop: '8px',
                                            textAlign: 'center'
                                        }}>
                                            ⚕️ Always consult a healthcare professional before taking medication
                                        </div>
                                    </div>
                                )}

                                {loadingMedicines[disease.diseaseName] && (
                                    <div style={{ marginTop: '12px', color: '#666' }}>
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