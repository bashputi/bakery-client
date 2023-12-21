const BASE_URL = 'https://api.scrapingrobot.com/';
const API_TOKEN = '2d9ee0d2-e1cd-4421-8150-38160d9d1a3a';


const fetchWithBaseUrl = async (endpoint, options) => {
  const url = `${BASE_URL}${endpoint}?token=${API_TOKEN}`;
  
  try {
    const response = await fetch(url, options);
    // Handle response as needed
    return response;
  } catch (error) {
    // Handle fetch errors
    console.error('Error fetching data:', error);
    throw error;
  }
};

export default fetchWithBaseUrl;