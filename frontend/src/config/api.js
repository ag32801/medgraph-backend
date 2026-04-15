// API configuration
const getApiBaseUrl = () => {
  return import.meta.env.VITE_API_URL || 'http://localhost:8080';
};

export const API_BASE_URL = getApiBaseUrl();

// Helper function for API calls
export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`API call failed: ${response.statusText}`);
  }

  return response.json();
};