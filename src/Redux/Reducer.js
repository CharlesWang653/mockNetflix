const initStst = {};

const dataReducer = (state = initStst, action) => {
  switch(action.type){
    case "ADDTOMYLIST":
      var addstateBuf = {...state};
      var showBuf;
      addstateBuf.recommendations = addstateBuf.recommendations.filter((item) => {
        if(item.id === action.id){
          showBuf = item;
        }
        return item.id !== action.id;
      })
      addstateBuf.mylist.push(showBuf);
      return addstateBuf;
    case "REMOCEFROMMYLIST":
      var stateBuf = JSON.parse(JSON.stringify(state));
      stateBuf.mylist = stateBuf.mylist.filter((item) => {
        return item.id !== action.id;
      })
      return stateBuf;
    case "GETALLLIST":
      return action.data;
    default: 
      return state;
  }
}
export default dataReducer;