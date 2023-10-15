import axios from "axios";

axios.defaults.baseURL = "https://652c162ad0d1df5273ef215f.mockapi.io/users";

export const fetchCards = async () => {
  try {
    const result = await axios.get("/");
    return result.data;
  } catch (error) {
    console.log(error);
  }
};
