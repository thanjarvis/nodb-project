import Comments from "./Comments";
import React, { Component } from "react";
import { ToastContainer, toast } from 'react-toastify';



export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: this.props.question,
      input:''
    };
  }


  handleInput =(e) => {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    })  
  }

  handleCheck =() =>{
    // const notifyGood = () =>{toast('good job')}
    // const notifyBad = () =>{toast('not quite')}  
    //make it a toastify  
    if (this.state.input === this.props.question.answer){
      window.alert("right on")
    }else{
      window.alert("try again")
    // console.log(this.props.question.answer)
    }
  }

  // clearInput = () => {
  //   if (this.state.input === true) {this.state.input=''}
  // }

  render() {
    // console.log(this.props.question);
    

    return (
      <div id='question-container'>
        {this.props.question ? <p id='question-text'>{this.props.question.question}</p> : null}
        <input
          id='answer-input'
          placeholder='Answer'
          onChange={e => this.handleInput(e)}
          name='input'
          value={this.state.input}
          onKeyDown={e => {if(e.key === 'Enter'){
            this.handleCheck()
          }}}
          // onKeyUp={e => {if(e.key === 'Enter'){
          //   this.clearInput()
          // }}}
          
        />
        
        <Comments
        editComment={this.props.editComment}
        deleteComment={this.props.deleteComment}
        reload={this.props.reload}
        addComment={this.props.addComment}
        question={this.props.question}
        
        
        id={this.props.id} />
      </div>
    );
  }
}
