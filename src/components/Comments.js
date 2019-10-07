import Comment from './Comment'
import React, {Component} from 'react';
import axios from 'axios'



export default class Comments extends Component{
    constructor(){
        super()
        this.state = {
            questions: [{comments:[]}],
            // questions: this.props.question,

            input:''            
        }
    }
    
    
    componentDidMount = () => {
        axios.post('/api/questions')
        .then(res => {
          this.setState({
            questions: res.data
          })
        })
        .catch(err =>{console.log(err) })
    }


    handleInput =(e) => {
        const {name, value} = e.target;
        this.setState({
          [name]: value
        })  
    }
    // addComment = () => {
    //     this.state.questions[this.props.id].comments.push(this.state.input)
        
    // }

    

    render(){        
        // console.log(this.props.question);
        
        return(
            <div id="comments">
                <div>
                <h5 id='comments-text'>Comments</h5>                
                <input
                value={this.state.input}
                name='input'
                placeholder="New Comment"
                onChange={e => this.handleInput(e)}
                onKeyDown={e => {
                    if (e.key === "Enter") {
                      this.props.addComment(this.state.input, this.props.id);
                    }
                }}
                />
                </div>
                <p id='entered-comments'>
                    {this.props.question.comments.map(element => {
                        return <div>{element}</div>
                    })}    
                
                {/* {this.state.questions[this.props.id].comments ? <div>{this.state.questions[this.props.id].comments}</div> : null}     */}
                </p>
                <Comment
                editComment={this.props.editComment}
                deleteComment={this.props.deleteComment}
                reload={this.props.reload}
                text={this.state.input}
                id={this.props.id}
                question={this.props.question}/>
            </div>
        )
    }
}