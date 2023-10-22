import {Component} from "react";
import "./style.css"

class ClassCompo extends Component {
   render(){
    return(
    <div className="classone">
    <h1>This is created using classgi component</h1>
    <p>This is done using external css</p>
    <p2>This is done using Inline Css</p2>
    </div>
    )
   }
}
export default ClassCompo;