require('colors')
var express     = require('express'),
    bodyParser  = require('body-parser')
    PORT        = 3000,
    app         = express();
    var trip = [
       {
         location     : "Seville",
         nextLocation : "Canary Island",
       },{
         location     : "Canary Island",
         nextLocation : "Cape Verde",
       },{
         location     : "Cape Verde",
         nextLocation : "Strait of Magellan",
       },{
         location     : "Strait of Magellan",
         nextLocation : "Guam",
       },{
         location     : "Guam",
         nextLocation : "Philippines",
       },{
         location     : "Philippines",
         nextLocation : "grave",
       },

    ];


app.use(
  bodyParser.json(), // used for parsing stringified JSON
  bodyParser.urlencoded({extended : true}) // used for parsing url-encoded strings
)

app.get('/', (req, res)=>{
  res.sendFile('html/seville.html', {root : './'});
});

app.get('/seville', (req, res)=>{
  res.sendFile('html/seville.html', {root : './'});
});

app.get('/canary', (req, res)=>{
  res.sendFile('html/canary.html', {root : './'});
});

app.get('/verde', (req, res)=>{
  res.sendFile('html/cape-verde.html', {root : './'});
});

app.get('/strait', (req, res)=>{
  res.sendFile('html/strait-magellan.html', {root : './'});
});

app.get('/guam', (req, res)=>{
  res.sendFile('html/guam.html', {root : './'});
});

app.get('/philippines', (req, res)=>{
  res.sendFile('html/philippines.html', {root : './'})
});

app.get('/next', (req,res)=>{

  var loc = req.query.location

    for (var i = 0; i < trip.length; i++) {
      var newLocation = trip[i]

      //console.log(trip[i].location + trip[i].nextLocation)
    if (newLocation.location.toLowerCase() == loc.toLowerCase()){
      console.log(newLocation.location.replace(/ /g, "%20") + newLocation.nextLocation)
      res.send(newLocation)
    }
  }



  //console.log(req.query.location);
})

app.get('/:country', (req,res)=>{
  res.send(`Magellan never traveled to ${req.params.country}`);
});


app.listen(3000, ()=>{
  console.log('Server running on port 3000!' .rainbow);
});
