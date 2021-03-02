const http = require('http');
const axios = require('axios').default;

 http.createServer((req, res)=>{
      res.write(users.join(", ")); // write a response
      
      res.end(); //end the response
    }).listen(8000); // listen for requests on port 8000

 let users = []; // names of users will be stored here
 let email = [];
 
(async function getNames(){
  try{
    const {data} = await axios.get("https://swapi.dev/api/people");
    users = data.map(user=>user.name);
    
    console.log(users)
  } catch(error){
    console.log(error)
  }
})()