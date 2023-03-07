import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    headers: {
      Authorization: `Client-ID Vi6ngL0Mm0gFb4gvS6_81vOHkBLYH1nHmajvQWltvXQ`,
    },
    params: {
      query: term,
    },
    catch(error) {
      console.log(error);
    },
  });
  return response.data.results;
};
export default searchImages;
