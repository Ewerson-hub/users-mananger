const express = require("express");
const {engine} = require("express-handlebars");
const router = require("./routes/routes")
const app = express();
app.use(express.urlencoded({extended : true}))


//config.
app.engine('handlebars', engine({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.set('views',"./views")

//routes
app.use(router)

app.listen(8080, ()=>{ console.log('server running')})