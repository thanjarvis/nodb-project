import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Question from './components/Question'
import HeaderFooter from './components/HeaderFooter'
import Footer from './components/Footer'
import './reset.css'
import './index.css'




class App extends Component {
  constructor(props){
    super(props)
    this.state ={
      questions: [{comments:[]}],
      selectedQuestionId: 0
    }
  }

  componentDidMount = () => {
    this.getQuestions()
    
  }

  getQuestions = () => {
    axios.get('/api/questions')
    .then(res => {
      this.setState({
        questions: res.data
      })
    })
    .catch(err =>{console.log(err) })

  }


  addComment = (text, id) =>{
    axios.post(`api/questions/${id}`, {text})
    .then(res => {this.setState({
      questions: res.data
      })

    })
  }
  
  handleSelectedQuestionIdUp = () =>{
    if(this.state.selectedQuestionId + 2 > this.state.questions.length){
      this.state.selectedQuestionId = -1
    }
    this.setState({
      selectedQuestionId: this.state.selectedQuestionId + 1
    })  
  }
  
  handleSelectedQuestionIdDown = () =>{
    if(this.state.selectedQuestionId === 0){
      this.state.selectedQuestionId = this.state.questions.length
    }
    this.setState({
      selectedQuestionId: this.state.selectedQuestionId - 1
    })    
  }


  deleteComment = ( id ) => {
    axios.delete(`api/questions/${id}`)
    .then(res => { 
        this.setState({
            questions: res.data
        })
        console.log('is this the whole question obj', res.data);
    
    })
    .catch(err => {console.log(err);
    })
  }

  editComment = (text, id) =>{
    axios.put(`api/questions/${id}`, {text})
    .then(res => {this.setState({
      questions: res.data
      })
      console.log('hit edit comment user side');
      
    })
  }
  
  


  
  render(){
    // console.log(this.state.questions);
    

    return (
        <div id='body'>
          <div id='header'>
            <HeaderFooter/>
          </div>
          
          <div id='question'>
            <Question
              editComment={this.editComment}
              deleteComment={this.deleteComment}
              reload={this.getQuestions}
              addComment={this.addComment}
              question={this.state.questions[this.state.selectedQuestionId]}
              id={this.state.selectedQuestionId}/>
          </div>
          <div id='lower-button-container'>
          <button className='lower-button button' onClick={this.handleSelectedQuestionIdDown}>Previous</button>
          <button className='lower-button button' onClick={this.handleSelectedQuestionIdUp}>Next</button>
        </div>
        <Footer/>
        </div>
    );

  }






}

export default App;
