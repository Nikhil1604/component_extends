import React,{Component} from "react";
export class Updated extends Component {

    constructor (props){
        super(props)

        this.state ={
            count : 0
        }

    }
    
    handleclick = () => {
        this.state =({
            count : this.state.count+1
        })
    }
    componentDidUpdate() {
        console.log("components updated")
    }

    render(){
        
        return(
            <>
                <h1> To update the components click on button</h1>
                
                <h1>{this.state.count}</h1>
                <button onClick={this.handleclick}>Click Me</button>
            </>
        )
    }

}