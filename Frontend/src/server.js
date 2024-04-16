const express = require('express')
const app = express();
// app.use(express.urlencoded({ extended: true }));

const signuprouter = require('./routers/signup')
const loginrouter = require('./routers/login')
const postrouter = require('./routers/post')
const userrouter = require('./routers/user')
const updater = require('./routers/Update')
const Follow = require('./routers/Follow')
const Searcher = require('./routers/Searcher')

app.use((err, req, res, next) => {
    console.error('Error parsing cookies:', err);
    next(err);
});

var activeusers = new Map();

const http = require("http")
const { Server } = require('socket.io')
const cors = require('cors')
const server = http.createServer(app)

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/hodo")
    .then(() => {
        console.log("connected to mongo")
    })
    .catch((e) => {
        console.log("error : ", e)
    })


app.use((req, res, next) => {

    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin,X-Requested-With,Content-type,Accept"
    // );

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Origin,Accept,X-Requested-With, content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

app.use(cors())
app.use(express.json());
app.use(express.static('public'))


app.listen(8080, (req, res) => {

    console.log("listening on 8080")
})


// ************ server *************



const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
    },
    cookie: true
})

// io.use((socket, next) => {
//     // Access the HTTP request object associated with the WebSocket connection
//     const req = socket.request;

//     // Parse cookies from the HTTP request object
//     cookieParser()(req, null, () => {
//         // Pass the parsed cookies to the next middleware
//         next();
//     });
// });


io.on("connection", async (socket) => {
    console.log(`user connected  : `, socket.id)

    socket.on("setup", (user) => {
        socket.join(user.id)
    })

    socket.on("message", (data) => {
        console.log("current socket id in message : ", socket.id)
        console.log(activeusers)
        let socketid = activeusers[data.username]
        console.log(socketid)
        console.log(data)
        io.to(socketid).emit("receive", { message: data.message })
    })
})

server.listen(3001, () => {
    console.log("server is running")
})