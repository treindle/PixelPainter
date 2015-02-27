function createErase(name){
    var $input_erase = $('<input type="button" class="erase_button" id="name" value="Erase" />');
    $input_erase.appendTo($("#controls"));
}
createErase('erase');

function createClear(name){
    var $input_clear = $('<input type="button" class="clear_button" id="name" value="Clear" />');
    $input_clear.appendTo($("#controls"));
}
createClear('clear');

// function clearCanvas(){
$(".clear_button").click(function(){
  $("#artboard").children("div").css("background-color", "rgb(255, 255, 255");
});

var painted_boxes = [];
$(".erase_button").click(function(){
  var arr_len = painted_boxes.length;
  $(painted_boxes[arr_len-1]).css("background-color", "rgb(255, 255, 255");
  painted_boxes.pop();
  // $(painted_boxes[0]).css("background-color", "rgb(255, 255, 255");
  // painted_boxes.splice(0,1);
});


//below: create random color
$(function() {
  $(".square").each(function() {
    var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
  });
});

function build_controls(size){
  var box = Math.floor(960 / size);
  for (var i = 0; i < (size); i++) {
    $("#controls").append('<div class="square"></div>');
  };
  $(".square").css("width",box);
  $(".square").css("height",box);
}
build_controls(6);

function build_canvas(size){
  var box = Math.floor(960 / size);
  for (var i = 0; i < (size); i++) {
    for (var j = 0; j < (size); j++) {
      $("#artboard").append('<div class="canvas" id=""></div>'); 
    }
      $("#artboard").append('<div class="canvas_row"></div>');
  };
  $(".canvas").css("width",box);
  $(".canvas").css("height",box);
}
build_canvas(6);
//source: https://github.com/kriox26/odin_project/blob/master/sketchpad/js/script.js


//this creates hover effect
$(".square").hover(function(){
  $(this).attr("id", "selection");
}, function(){
  $(this).attr("id", "none")
});

//this creates outline on selected color
$(".square").click(function() {
  $(".square").css("outline", "none");
  $(this).css("outline", "6px solid pink");
  var color_pick = $(this).css("background-color");
//this transposes color_pick on canvas div
$(".canvas").click(function() {
  $(this).css("background-color", color_pick);
  // painted_boxes.unshift(this);
  painted_boxes.push(this);
  });
});


