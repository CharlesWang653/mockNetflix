const axios = require("axios");

export const Add = (id) => {
  return {type: "ADDTOMYLIST", id:id};
}
export const getAllList = (data) => {
  return {type: "GETALLLIST", data: data};
}
export const getList = () => {
  return (dispatch, getState) => {
    axios
      .get("http://localhost:8888/")
      .then(res => {
        dispatch(getAllList(res.data));
      })
  }
}
export const remove = (id) => {
  return {type:"REMOCEFROMMYLIST", id:id};
}