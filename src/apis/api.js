import axios from 'axios';

export const fetchDataFromApi = async (url) => {
  try {
    const { data } = await axios.get("http://localhost:4000" + url);
    return data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

export const postData = async (url, formData) => {
    try {
      const { data } = await axios.post("http://localhost:4000" + url, formData);
      return data;
    } catch (e) {
      console.error('Error:', e.response?.data || e.message);
      throw e;
    }
  };
