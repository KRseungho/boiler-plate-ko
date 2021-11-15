const express = require('express')
const app = express()
const port = 5000

/*mongoose 연결*/
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seungho:tjtmdgh@boilerplate.9lupn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    /*useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false*/
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))



app.get('/',(req, res) => res.send('Hello world!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
