const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key')

const { User } = require("./models/User");


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());



/*mongoose 연결*/
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    /*useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false*/
}).then(() => console.log('MongoDB Conneted...'))
  .catch(err => console.log(err))



app.get('/',(req, res) => res.send('Hello world! 안녕하세용~'))

app.post('/register',(req, res) => {
//회원가입 할 때 필요한 정보들을 가져오면
//database에 넣어준다
    
      
      const user = new User(req.body)

      user.save((err, userInfo) =>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
          success: true
        })
      })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
