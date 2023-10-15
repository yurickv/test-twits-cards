import axios from "axios";

axios.defaults.baseURL = "https://652c162ad0d1df5273ef215f.mockapi.io/users";

export const fetchCards = async (page = 1) => {
  try {
    const result = await axios.get(`/?page=${page}&limit=3`);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};

export const changeFaworite = async (id, data) => {
  try {
    const result = await axios.put(`/${id}`, data);
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
