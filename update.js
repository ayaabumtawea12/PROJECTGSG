const fs = require('fs');
function update(){ 
    console.log(`
    
    
    
    `);
    console.log(`
    
    
    `);
      console.log('Update movie');
        const prompt = require("prompt-sync")();
        const id = prompt("What is id?");
        const title = prompt("What is newtitle?");
        const director = prompt("What is newdirector?");
        const release_year = prompt("What is newrelease_year?");
        const gener = prompt("What is nwegener?");
         
        const fs = require('fs');
        var data =fs.readFileSync('movie.json');
        var myObject= JSON.parse(data);
        
        myObject.filter((a)=>{
        if(a.id==id){
          a.title=title;
          a.director=director;
          a.release_year=release_year;
          a.gener=gener;
          myObject.push(a);
        }
     })

     var newData = JSON.stringify(myObject);
    fs.writeFile('movie.json', newData, err => {
         if(err) throw err;        
    })
     
}

update();