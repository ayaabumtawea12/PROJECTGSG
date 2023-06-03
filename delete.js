const fs = require('fs');
function deletemovie(){
    console.log(`
  
  `);
    console.log("Delete movie");
    const prompt = require("prompt-sync")();
    const id = prompt("What is id?");
  
    var data = fs.readFileSync('movie.json');
    var myObject= JSON.parse(data);
  
    let arr=[];
  
     Array.prototype.diff = function(a) {
      return this.filter(function(i) {return a.indexOf(i) < 0;});
    };
   
    for(let i=0;i<myObject.length;i++){
    if(myObject[i].id==id){
      arr.push(myObject[i]);
    }
   }
    const dif1 = myObject.diff(arr);  
    myObject=dif1;
    var newData = JSON.stringify(myObject);
    fs.writeFile('movie.json', newData, err => {
         if(err) throw err;
     })
   }

deletemovie();