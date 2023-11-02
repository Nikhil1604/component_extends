import React,{Component} from "react";

export class Mounted extends Component {

    componentDidMount(){
        console.log("components Mounted")
    }

    render(){
        return(
            <h1>Mounted</h1>
        )
    }
}