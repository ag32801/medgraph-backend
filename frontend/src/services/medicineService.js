import api from './api';

export const fetchMedicinesByDisease = async (diseaseName) => {
    try {
        const response = await api.get(`/api/medicines/disease/${encodeURIComponent(diseaseName)}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching medicines:', error);
        return []; // Return empty array on error
    }
};