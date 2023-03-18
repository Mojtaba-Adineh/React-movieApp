import axios from "axios";

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}; //this say whenever u reauest the server set this token as a header 

axios.interceptors.response.use(null, (error) => {
    //UnExpected Error
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;
  
    if (!expectedError) {
      console.log("Loggin the error ", error);
      alert("an unExpected Error occurred.");
    }
  
    return Promise.reject(error);
  });

export default {
    get : axios.get , 
    post : axios.post, 
    put : axios.put , 
    delete : axios.delete,
    setJwt ,
}