
const questions = [
    {
        question: 'Who was the legendary Benedictine monk who invented champagne?',
        answer:'Dom Perignon',
        comments: [],
        id:1
    },   
    {
        question:'Name the largest freshwater lake in the world?',
        answer:'Lake Superior',
        comments: [],
        id:2
    },
    {
        question:'Where would you find the Sea of Tranquility?',
        answer:'The Moon',
        comments: [],
        id:3
    },
    {
        question:'What is someone who shoes horses called?',
        answer:'A farrier',
        comments: [],
        id:4
    },
    {
        question:'What kind of weapon is a falchion?',
        answer:'A Sword',
        comments: [],
        id:5
    },
    {
        question:'What is the diameter of Earth?',
        answer:'8000 miles',
        comments: [],
        id:6
    },
    {
        question:`What is the painting 'La Gioconda' more usually known as?`,
        answer:'The Mona Lisa',
        comments: [],
        id:7
    },
    {
        question:'What flavour is Cointreau?',
        answer: 'Orange',
        comments: [],
        id:8
    }
    
]
const id =0

module.exports = {
    

    sendQuestion(req, res){
        res.status(200).send(questions)
    },

    sendComments(req,res){        
        res.status(200).send(questions)
    },

    deleteComments(req, res){
        const { id } = req.params
        questions[id].comments.splice(0, 1)
        res.status(200).send(questions)
    },
    
    addComment(req, res){
        // console.log("hit add comment");
        
        const {text} = req.body;
        const {id} =req.params
        questions[+id].comments.push(text)
        res.status(200).send(questions)
        console.log('hit addComemnt server side', questions);


    },

    editComments(req, res){
        console.log('this is the req.body', req.body);
        
        const {text} = req.body
        const {id} = req.params;
        console.log('heres my new comment', text);
        
        questions[id].comments.splice(0, 1, text)
        res.status(200).send(questions)
        console.log('hit editComment server side', questions);
        
    },

}