const express = require('express')
const request = require('request');
const app = express();
const bodyParser = require('body-parser');

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



  app.get('/search', (req, res) => {
      let query = req.query.q.toLowerCase();
    request('http://www.theaudiodb.com/api/v1/json/{API}/search.php?s=' + query,
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          music = JSON.parse(body)
          res.send(music);
        }})
    })
app.get('/songs/:id', (req,res) => {
    console.log("songs")
    request('http://www.theaudiodb.com/api/v1/json/{API}/mvid.php?i=' + req.params.id,
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let songs = JSON.parse(body)
        console.log(songs)
        res.send(songs)
      }
    });
})
          
        
      
  

//   app.get('/songs', (req, res) => {
  
// });


  // spotify
// .request('https://api.spotify.com/v1/search?q=bowie&type=artist are pretty ')
// .then(function(data) {
//   console.log(data); 
// })
// .catch(function(err) {
//   console.error('Error occurred: ' + err); 
// });



// spotify.search({ type: 'artist', query: 'Lady GaGa' }, function(err, data) {
//     if (err) {
//       return console.log('Error occurred: ' + err);
//     }
   
//   console.log(data); 
//   });


// app.get('/search', (req, res) => {
//     request('http://www.theaudiodb.com/api/v1/json/195003/search.php?s=coldplay',
//       function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//           let music = JSON.parse(body)
//           console.log(music);
//           res.render('pages/search', {
//             music
//           });
//         }
//       });
//   });
