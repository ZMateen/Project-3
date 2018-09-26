import axios from "axios";
const BASEURL = "https://opentdb.com/api.php?amount=10&category=15&type=multiple";



export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
