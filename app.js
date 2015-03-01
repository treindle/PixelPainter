var express = require('express')
var app = express();
var bodyParser = require('body-parser');


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

//defines type of Schema to store
var picSchema = new Schema({
  name: String,
  id: String,
  timestamp: Date,
  control: Array,
  artboard: Array
 }); 

//creates model
var Pic = mongoose.model('Pic', picSchema);
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

// //below: testing
// app.get('/pic', function (req, res) {
//   res.render('/pic/' + id);
// });

app.put('/pic/:id?', function (req, res) {

  var id = req.params.id || "";
  var control = control || "";
  var artboard = artboard || "";

  // //finds all pics
  Pic.find(function(err, pics){
    if (err) throw err;

    res.render('pics', { id: id, control: control, artboard: artboard });
  });

});

app.post('/pic', function (req, res) {
console.log(req.body);
  // var controls = req.params.controls || "";
  // var artboard = req.params.artboard || "";

  //creates chat object
//   var pic = new Pic(
//     { 
//       control : control,
//       artboard : artboard
//     } 
//   );
// //   //saves chat to db
//   pic.save(function (err) {
//     if (err) throw err;
//     // res.render('saved');
//     res.save('/pic/' + id);
//     // res.render('pics', { id: id, control: control, artboard: artboard });
//   });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
