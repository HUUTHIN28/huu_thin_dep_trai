const express=require('express');
const app = express();
const bodyParesr= require('body-parser');
const port =process.env.PORT || 5000;
const apiPath= '/api/';


app.use(express.json());
app.use(express.urlencoded());

app.use(express.static('cline'));
//app.use(express.static('public'));
//app.get('/',function(req,res){
 // res.sendFile(__dirname + "/" + "cline/home_page.html");
//});
app.use(apiPath +'users',require('./routes/users.route'));
//app.get('/thin',function(req,res){
  //res.send('thin dep trai');
//});
app.listen(8080);