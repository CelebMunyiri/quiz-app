import React,{Component} from "react";

class Answercard extends Component{
    constructor(){
        super()
        this.state={
            infor:"What is the capital city of Kenya"

        }
    }
        changeQuiz=()=>{
            this.setState({
                infor:"What is Capital of Nigeria"
            })
        }
    
     
render(){
return(
    <>
    <form>
        <h2>{this.state.infor}</h2>
        <button onClick={()=>this.changeQuiz()}>Next</button>
        <input type="radio-button">Nairobi</input>
    </form>
    </>
)
    }
}

export default Answercard