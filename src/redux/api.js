import axios from "axios";

const YOUR_APP_ID = "f5061603";
const YOUR_APP_KEY = "72b34173897f492f5a7298f1c59feb74";

export const getReceipe = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
    await axios.get(url);
};
