import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";
import AddImage2 from "./components/dataComponents.AppClass";

export default class AppClass extends Component{
    render(){
        return (
            <div className="gridElement">
                <AddImage2 URL={elephant}/>
                <AddImage2 URL={elephant}/>
                <AddImage2 URL={elephant}/>
                <AddImage2 URL={elephant}/>
            </div>
        )
    }
}