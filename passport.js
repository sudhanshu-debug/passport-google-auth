const passportGoogleOauth20 = require('passport-google-oauth20').Strategy;
const passport = require('passport');

passport.use(
    new passportGoogleOauth20(
        {
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.SECRET_ID,
            callbackURL: "/auth/google/callback",
            scope: ["profile", "email"]
        },
        function(accessToken, refreshToken, profile, callback){
            callback(null, profile)
        }
    )
)

passport.serializeUser((user,done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})