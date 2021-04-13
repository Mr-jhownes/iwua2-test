const http = require('http'),
 axios = require('axios').default,
 logger = require('morgan'),
 cors = require('cors'),
 express = require('express'),
 bodyParser = require('body-parser'),
 mongoose = require('mongoose'),
 dotenv = require('dotenv');

    dotenv.config();
    var app = express();
    var port = 8000;

    
    app.use(bodyParser.json());
    app.use(logger('tiny'));
    app.use(require('./routes'));

 let users = []; // names of users will be stored here

 
    (async function getNames(){
    try{
    
    const {data} = await axios.get("https://swapi.dev/api/people");
    //users = data.map(user => user.name )
    users = data.results.map(user => user.name);
    
    console.log(users)
    } catch(error){
    console.log(error)
    }
  
})()

    app.listen(port, function(err){
    console.log('Listining on port: 8000');
})





// http.createServer((req, res)=>{
  //    res.write(users.join(", ")); // write a response
      
    //  res.end(); //end the response
   // }).listen(8000); // listen for requests on port 8000

   const dbURI = process.env.DB_URL;

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then((result) => console.log('connected to db'))
        .catch((err) => console.log(err));