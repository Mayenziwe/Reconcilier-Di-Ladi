const express = require("express");
const session = require("express-session");
const expressLayouts = require("express-ejs-layouts");
const hbs = require("express-handlebars");
const mongoose = require("mongoose");
const passport = require("passport");
const localStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const flash = require('connect-flash');

const app = express();

mongoose.connect(
  "mongodb+srv://mayenziwe:mavezerr2002vezi@users.hh6wb.mongodb.net/Data",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then(console.log('server is running'));

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    default: Date.now
  }
});
const User = mongoose.model('User', UserSchema)

//Middleware

app.engine('hbs', hbs({ extname: '.hbs'}));
app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"));
app.use(
  session({
    secret: "verygoodsecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Connect flash
app.use(flash());
//Global vars
app.use((req, res, next) =>{
    res.locals.sucess_msg = req.flash('sucess_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

//passport.js

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(function (user, done){
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  //setup user model
  User.findById(id, function(err, user){
      done(err, user);
  });
});

passport.use(new localStrategy(function(username, password, done){
    User.findOne({username: username}, function (err, user){
        if(err){
            return done(err);
        }
        if (!user){
            return done(null, false, {message: 'Incorrect username.'});
        }

        bcrypt.compare(password, user.password, function(err, res){
            if (err) return done(err);

            if(res === false){
                return done(null, false, {message: 'Incorrect password'});
            }

            return done(null, user);
        });
    });

}));


function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    else{
        res.redirect('/login');
    }
}

function isLoggedOut(req, res, next){
    if(!req.isAuthenticated()){
        
        return next();
    }
    else{
        res.redirect('/');
    }
}


//Routes
app.get('/', isLoggedIn, (req, res) =>{
    //res.render("index", {title: "Home"});
    //res.sendFile(__dirname + "/index.html");
    res.redirect('http://127.0.0.1:5501/index.html');
});

app.get('/about', isLoggedIn, (req, res) =>{
    res.render("index", {title: "About"});
});

app.get('/register', (req, res) => res.render('register'));


app.post('/register', (req, res) =>{
    
    const{name, surname, username, email, phone, password, passwordConfirm} = req.body;

    let errors = [];

    //Check required fields

    if(!name || !surname || !username || !email || !phone || !password || !passwordConfirm){
        errors.push({
            msg: "please fill in the all fields"
        });

    }

    //Check if Passwords match
    if(password !== passwordConfirm){
        errors.push({
            msg: "Passwords do not match"
        });
    }

    //check passLegnth

    if(password.length < 6){
        errors.push({
            msg: "Password should be atleast 6 characters"
        });
    }

    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            surname,
            username,
            email,
            phone,
            password,
            passwordConfirm
        });

    }else{
        User.findOne({username: username})
        .then(user =>{
            if(user){
                //User exists
                errors.push({
                    msg: "User already exists"
                })
                res.render("register", {
                  errors,
                  name,
                  surname,
                  username,
                  email,
                  phone,
                  password,
                  passwordConfirm,
                });

            }else{
                const newUser = new User({
                    name,
                    surname,
                    username,
                    email,
                    phone,
                    password
                });
                //Hash password

                bcrypt.genSalt(10, (err, salt) =>bcrypt.hash(newUser.password, salt, (err, hash)=>{
                    if(err) throw err;
                    //Set password to hashed
                    newUser.password = hash;
                    newUser.save()
                    .then(user =>{
                        req.flash('sucess_msg', 'You are now registered and can login');
                        res.redirect('/login');
                    })
                    .catch(err => console.log(err));

                }));



                
                //console.log(newUser);

            }
        })
        //res.render('login');
    }


    
});
app.get('/login', isLoggedOut, (req, res) =>{
    const response = {
        title: 'Login',
        error: req.query.error
    }
    res.render('login', response);
})

app.post('/login',passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: 'login?error=true'
}));

app.get('/logout', function (req, res){
    req.logout();
    res.redirect('/');

})

//Setup Admin user
app.get('/setup', async (req, res) =>{
    const exists = await User.exists({username: "admin"});

    if(exists){
        res.redirect('/login');
        return;
    };

    bcrypt.genSalt(10, function (err, salt){
        if (err){
            return next(err);
        }
        bcrypt.hash("pass", salt, function (err, hash){
            if (err) {
              return next(err);
            }
            const newAdmin = new User({
                username: "admin",
                password: hash
            });
            newAdmin.save();

            res.redirect('/login');
        });
    });

});

app.listen(3001, () =>{
    console.log('listening on port 3001');
});