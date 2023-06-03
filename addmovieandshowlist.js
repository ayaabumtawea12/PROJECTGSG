console.log("Welacome to movie app");
console.log(`

`);
console.log('List of movies:');
console.log(`
`)
const fs = require('fs');
var data = fs.readFileSync('movie.json');
var myObject= JSON.parse(data);

myObject.map((movie,index)=>{
  console.log(`${index+1}- movie name: ${movie.title},
  overview of this movie: ${movie.overview}
  Movie genre:  ${movie.gener}
  vote_average: ${movie.vote_average}`);
  }) 
console.log(`


`)
console .log('Add movie');
const prompt = require("prompt-sync")();
const id = prompt("What is id?");
const title = prompt("What is title of movie?");
const director = prompt("What is director?");
const release_year = prompt("What is release_year?");
const gener = prompt("What is gener?");
const overview = prompt("What is overview?");
const vote_average = prompt("What is vote_average?");
const vote_count = prompt("What is vote_count?");

//let obj;
//const jsondata = JSON.parse(data);
let obj={
  id:id,
  title: title,
  director: director,
  release_year:release_year,
  gener:gener,
  overview:overview,
  vote_average:vote_average,
  vote_count:vote_count,
 }
 
myObject.push(obj);
var newData = JSON.stringify(myObject);
fs.writeFile('movie.json', newData, err => {
     if(err) throw err;
     console.log(`

`);
    console.log("New movie added");
   
}); 

 
 