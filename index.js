require("dotenv").config()
const express = require("express")
const expressSession = require("express-session")
const passportGoogleOauth20 = require("passport-google-oauth20")
const passport = require("passport")
const cors = require("cors")
const cookieSession = require("cookie-session")
const passportSetup = require("./passport")
const authRoutes = require("./routes/auth")
const app = express()

app.use(
    expressSession({
        secret: 'your-secret-key',
        resave: false,
        saveUninitialized: true
    })
)
app.use(passport.initialize())
app.use(passport.session())
app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
)
app.use("/auth", authRoutes)

const port = 8080
app.listen(port, ()=>{
    console.log("server is up and running 8080")
})


