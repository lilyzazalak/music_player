const express = require('express')
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config()

const api_key = process.env.API_KEY;

app.use(bodyParser());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.listen(8080, ()=>{
    console.log('listening on port 8080')
})


//GET ARTIST INFO 
app.get('/search', (req, res) => {
  let query = req.query.q.toLowerCase();
  request('http://www.theaudiodb.com/api/v1/json/'+ api_key + '/search.php?s=' + query,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let info = JSON.parse(body)
      res.send(info);
      }
    })
})

//GET ARTIST YOUTUBE VIDEOS 
app.get('/songs/:id', (req,res) => {
  request('http://www.theaudiodb.com/api/v1/json/' + api_key + '/mvid.php?i=' + req.params.id,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let video = JSON.parse(body)
        res.send(video)
      }
    })
})

//GET ARTIST UPCOMING EVENTS
app.get('/events/:date1/:date2/:artist', (req,res) => {
  request('https://rest.bandsintown.com/artists/' + req.params.artist + '/events?app_id=music&date='+ req.params.date1 + '%2C' + req.params.date2,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let events = JSON.parse(body)
        res.send(events)
      }
    })
})

          
        
      
  
