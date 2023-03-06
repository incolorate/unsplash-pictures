import axios from "axios";

const searchImages = async (term) => {
  const response = axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: `Client-ID Vi6ngL0Mm0gFb4gvS6_81vOHkBLYH1nHmajvQWltvXQ`,
    },
    params: {
      query: term,
    },
  });
  return response.data.response;
};
export default searchImages;
