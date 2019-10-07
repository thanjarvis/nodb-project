import axios from 'axios'
import React, {Component} from 'react';

export default class Comment extends Component {
    constructor(){
        super()
        this.state = {
            // questions: [],
            questions: [{comments:[]}]

        }
    }


    // deleteComment = ( id ) => {
    //     axios.delete(`api/questions/${id}`)
    //     .then(res => { 
    //         this.setState({
    //             questions: res.data
    //         })
    //         console.log('is this the whole question obj', res.data);
        
    //     })
    //     .catch(err => {console.log(err);
    //     })

    // }

    // componentDidMount = () =>{
    //     this.deleteComment()
    // }

    // editComment = (text, id) =>{
    //     axios.put(`api/questions/${id}`, {text})
    //     .then(res => {this.setState({
    //       questions: res.data
    //       })
    //       console.log('hit edit comment user side');
          
    //     })
    // }
    



    render(){
        // console.log(this.state.questions);
        
        return(
            <div id='upper-button-container'>
                <button 
                className='upper-button button' 
                onClick={() => this.props.editComment(this.props.text, this.props.id)}
                >Edit</button>
                <button
                    className='upper-button button'
                    onClick={() => this.props.deleteComment(this.props.id)}
                >Delete</button>

            </div>
        )
    }
}