const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    var n1 =Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var result = (n1/(n2*n2))*10000;
    if(result<18.5){
        res.send("Your BMI is "+result.toFixed(2)+", You are underweight")
    }else if(result<24.9){
        res.send("Your BMI is "+result.toFixed(2)+", You've got a normal BMI!")
    }else if(result<29.9){
        res.send("Your BMI is "+result.toFixed(2)+", You are overweight!")
    }else{
        res.send("Your BMI is "+result.toFixed(2)+", You are obese!")
    }
    
    console.log(req.body.num1);
});

app.listen(3000,function(){
    console.log("Server has started on port 3000");
});

