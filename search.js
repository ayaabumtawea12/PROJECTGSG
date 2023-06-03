const fs = require('fs');
const prompt = require("prompt-sync")();
function search(){
    console.log("searching by title of movie...");
    var data = fs.readFileSync('movie.json');
    var myObject= JSON.parse(data);
    const searchtitle = prompt("What is title of movie?");
    myObject.filter((a)=>{
     if(a==null){
       return ' ';
     }
    if(a.title==searchtitle){
    console.log(a) ;
    }  
  }) 
  
 }

search();
