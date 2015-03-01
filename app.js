var express = require('express')
var app = express();
// var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

// //defines type of Schema to store
// var pixelPaint = new Schema({
//   username: String,
//   message: String,
//   timestamp: Date,
//   id: Number,
//   controls: Array,
//   artboard: Array
//  }); 

//creates model
// var Pic = mongoose.model('Pic', "views/charts.jade");
app.use(express.static(__dirname + "/public"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(3000);

// app.get('/pic/:id?', function (req, res) {

  // var id = req.params.id || "";
  // var controls = req.params.controls || "";
  // var artboard = req.params.artboard || "";

  // //finds all pics
  // Pic.find(function(err, chats){
  //   if (err) throw err;

  //   res.render('pics', { id: id, controls: controls, artboard: arboard });
  // });

// });

// app.post('/pic', function (req, res) {

//   var controls = req.params.controls || "";
//   var artboard = req.params.artboard || "";

//   //creates chat object
//   var pic = new Pic(
//     { 
//       controls : controls,
//       artboard : artboard
//     } 
//   );
//   //saves chat to db
//   pic.save(function (err) {
//     if (err) throw err;
//     res.redirect('/pic/' + id);
//   });

// });


//below it Cat example
// var Cat = mongoose.model('Cat', { name: String });
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// })

//   var kitty = new Cat({ name: 'Zildjian' });
//   kitty.save(function (err) {
//     if (err) throw err;
//     console.log('meow');
//   });

//   Cat.find(function(err, cats){
//     if (err) throw err;
//     res.json(cats);
//   });

// });

// var server = app.listen(3000, function () {

//   var host = server.address().address;
//   var port = server.address().port;

//   console.log('Example app listening at http://%s:%s', host, port);
// });

// $('.clear').click(function(){
//   $('.username').empty();
//   $('.message').empty();
// });