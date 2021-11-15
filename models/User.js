const mongoose = require('mongoose');

/* 스키마 생성*/
const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unuque: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})

/* 모델 생성 : 모델은 스키마를 감싸줌*/
const User = mongoose.model('User', userSchema)

/* 다른 곳에서도 쓸 수 있도록*/
module.exports = { User }