const express = require("express")
const path = require("path")
const app = express()
const port = process.env.PORT || 3000
const hbs = require("hbs")

// public static path

const static_path = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partials_path = path.join(__dirname,"../templates/partials");

app.use(express.static(static_path));

app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);
// routing 

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/about",(req,res)=>{
    res.render('about')
})

app.get("/weather",(req,res)=>{
    res.render('weather')
})

app.get("*",(req,res)=>{
    res.render('404error',{
        errorMsg:'Oops ! Page not found..'
    })
})

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})