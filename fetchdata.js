const fs = require('fs');
 async function fetchdata(){ 

    await fetch("https://api.themoviedb.org/3/discover/movie?api_key=dc1d2c8dc004e789f8c26e808c8c91c2&language=en", { method: 'GET' })
      .then(async res => {
        const data = await res.json();
        //console.log(data.results);
       const fs = require('fs');
       var dat = fs.readFileSync('movie.json');
       var myObject= JSON.parse(dat); 
       for(let i=0; i<data.results.length; i++)
       {
           myObject.push(data.results[i]);
       }
       var newData = JSON.stringify(myObject); 
       fs.writeFile('movie.json', newData, err => {
        if(err) throw err;
        console.log("Add to json file successfully");
    }); 
    
      })
    
      .catch(err => {
        console.log("Failed to get the data!");
        console.log(err);
      });
    }

fetchdata()