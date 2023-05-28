const express = require("express");
const {engine} = require("express-handlebars");

const app = express();
app.use(express.urlencoded({extended : true}))

const users = []

//config.
app.engine('handlebars', engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.set('views',"./views")

//routes
app.get("/", (req, res, next) => {
    res.render('home');
    next;
})
app.post("/", (req,res,next) => {
    users.push(req.body)
    res.render('home', {users: users})
    next;
})
app.get("/newUser", (req, res, next) => {
    res.render("newUser");
    next;
})

app.listen(8080, ()=>{ console.log('server running')})