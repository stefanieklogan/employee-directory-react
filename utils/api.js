import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  search: function(employees) {
    return axios.get("https://randomuser.me/api/?inc=picture,name,email,phone,nat&results=10&nat=NZ"),
    console.log(employees);
  }
};