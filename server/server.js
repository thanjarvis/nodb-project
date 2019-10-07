// require("dotenv").config({ path: __dirname + "/../../.env" });
const express = require('express')
const controller = require('./controller')
const app = express()
app.use(express.json())


app.get('/api/questions', controller.sendQuestion)

app.post('/api/questions', controller.sendComments)

app.delete('/api/questions/:id', controller.deleteComments)

app.post('/api/questions/:id', controller.addComment)
// app.put('/api/questions/', controller.editComments)

app.put('/api/questions/:id', controller.editComments)




// const {SERVER_PORT} = process.env

app.listen(8181, () => {
    console.log(`server running on 8181`);
    
})