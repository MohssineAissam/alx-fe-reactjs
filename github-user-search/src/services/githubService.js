import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchAdvancedUsers = async (query) => {
  const url = "https://api.github.com/search/users?q=" + query; // literal URL string
  try {
    const response = await axios.get(url);
    return { data: response.data.items, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};

export const fetchAdvancedUsers = async ({ location, minRepos, keyword }) => {
  try {
    const query = [
      keyword || '',
      location ? `location:${location}` : '',
      minRepos ? `repos:>=${minRepos}` : '',
    ]
      .filter(Boolean)
      .join('+');

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return { data: response.data.items, error: null };
  } catch (error) {
    return { data: null, error: error.message };
  }
};
