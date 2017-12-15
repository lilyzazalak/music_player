const express = require('express')
const request = require('request');
const app = express();
const bodyParser = require('body-parser');
var audioDBAPIkey = 195003
let music;

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
    request('http://www.theaudiodb.com/api/v1/json/195003/search.php?s=' + query,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          music = JSON.parse(body)
          res.send(music);
        }})
    })

//GET ARTIST YOUTUBE VIDEOS 
app.get('/songs/:id', (req,res) => {
    console.log("songs")
    request('http://www.theaudiodb.com/api/v1/json/195003/mvid.php?i=' + req.params.id,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let songs = JSON.parse(body)
        console.log(songs)
        res.send(songs)
      }
    });
})

//GET ARTIST UPCOMING EVENTS
app.get('/events/:date1/:date2/:artist', (req,res) => {
  request('https://rest.bandsintown.com/artists/' + req.params.artist + '/events?app_id=music&date='+ req.params.date1 + '%2C' + req.params.date2,
  function (error, response, body) {
    if (!error && response.statusCode == 200) {
      let events = JSON.parse(body)
      console.log(events)
      res.send(events)
    }
  });
})

          
        
      
  
