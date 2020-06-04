import React from "react"
import {connect} from "react-redux"
import * as actions from "../Redux/Actions"
import "./index.css"
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.GetAllList();
  }
  handleRemove = (id) => {
    this.props.Remove(id);
  }
  handleAdd = (id) => {
    this.props.Add(id);
  }
  render(){
    console.log(this.props);
    return (
      <div className="thepage">
        <img src="https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5.fit_lpad.size_624x364.v_1582751026.png"/>

        <h2 className="rowTitle">My List</h2>
        <div className="container">
          {this.props.data.mylist?this.props.data.mylist.map(item => {
            return (
              <div key={item.id} className="mylistitem">
                <img src={item.img}/>
                <p className="titles">{item.title}</p>
                <button onClick={() => this.handleRemove(item.id)} className="removebut">Remove</button>
              </div>
            )
          }):"loading"}
        </div>

        <h2 className="rowTitle">Recommondations</h2>
        <div className="container">
          {this.props.data.recommendations?this.props.data.recommendations.map(item => {
            return (
              <div key={item.id} className="recomList">
                <img src={item.img}/>
                <p className="titles">{item.title}</p>
                <button onClick={() => this.handleAdd(item.id)}className="addButton">Add</button>
              </div>
            )
          }):"loading"}
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    data: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetAllList: () => {
      dispatch(actions.getList());
    },
    Remove: (id) => {
      dispatch(actions.remove(id));
    },
    Add: (id) => {
      dispatch(actions.Add(id));
    }
  }
}
const ReduxApp = connect(mapStateToProps, mapDispatchToProps)(App)
export default ReduxApp;