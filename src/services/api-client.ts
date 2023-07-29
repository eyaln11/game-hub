import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "587d4c80f9ec4d54ba581672dea0e44a",
  },
});
