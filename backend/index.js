const express = require('express')
const app = express();
const path = require('path')
const signuprouter = require('./routers/signup')
const loginrouter = require('./routers/login')
const userrouter = require('./routers/user')
const treatmentrouter = require('./routers/treatment')
const workoutrouter = require('./routers/gym')
const dietrouter = require('./routers/dietrouter')
const mongoose = require('mongoose')

app.set('view engine', "ejs")
app.set('views', path.join(__dirname, "/views"))

mongoose.connect("mongodb://0.0.0.0:27017/nutrifit")
    .then(() => {
        console.log("connected to mongo")
    })
    .catch((e) => {
        console.log("error : ", e)
    })


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With, Content-Type,Authorisation');
    next();
})

app.use(express.json());
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.render('home')
})
app.use('/user', userrouter)
app.use('/register/signup', signuprouter)
app.use('/register/login', loginrouter)
app.use('/treatment', treatmentrouter)
app.use('/workout', workoutrouter)
app.use('/diet', dietrouter)


app.listen(8080, (req, res) => {

    console.log("listening on 8080")
})
