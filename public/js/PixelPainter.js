


// function clearCanvas(){


//below: create random color
$(document).ready(function() {
  var input = prompt('Type an integer between 1 and 10');
  var color_pick = null;

  createErase('erase');

  createClear('clear');
  
  build_controls(input);

  build_canvas(input);

  $(".clear_button").click(function(){
    $("#artboard").children("div").css("background-color", "rgb(255, 255, 255");
  });

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
    color_pick = $(this).css("background-color");
  });
  //this transposes color_pick on canvas div
  $(".canvas").click(function() {
    $(this).css("background-color", color_pick).slideDown(800);
    // painted_boxes.unshift(this);
    painted_boxes.push(this);
  });


  var painted_boxes = [];
  $(".erase_button").click(function(){
    var arr_len = painted_boxes.length;
    $(painted_boxes[arr_len-1]).css("background-color", "rgb(255, 255, 255");
    painted_boxes.pop();
    // $(painted_boxes[0]).css("background-color", "rgb(255, 255, 255");
    // painted_boxes.splice(0,1);
  });
  
  $(".square").each(function() {
    var hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("background-color", hue);
  });

  $("#save").click(function(event){
    var artboard=[];
    var control=[];
    event.preventDefault();
    $('.square').each(function(index, element){
      var store_square = $(element).css("background-color");
      control.push(store_square);
    });
    $('.canvas').each(function(index, element){
      var store_canvas = $(element).css("background-color");
      artboard.push(store_canvas);
      console.log(store_canvas)
    });

    var data = {
      artboard: artboard,
      control: control
    };

    $.ajax({
      type: "POST",
      url: "/pic",
      data: JSON.stringify(data),
      success: function(){
        alert('successfully saved')
      },
      dataType: "JSON"
    });
  });
});

// if(typeOf input!=number){
//   alert('invalid');
// }
// function validate(input){
//   if (isNaN(input) || input < 1 || input > 10) {
//       text = "Input not valid";
//     }else{}
//   if(input!=1 ||
//     input!=2||
//     input!=3||
//     input!=4||
//     input!=5||
//     input!=6||
//     input!=7||
//     input!=8||
//     input!=9||
//     input!=10){
//     alert('invalid')
//   }
//   var user_input=[];
//   for(var i = 1, i<11, i++){
//     user_input.push(i);
//   }
//   if(input!=i){
//     alert('invalid');
//   }else{
//     build_controls(input);
//     build_canvas(input);
//   }
// }
//     alert('invalid');
//   // }if(input==typeOf){
//   //   alert('please type an interger');
//   }else 
// }

function build_controls(input){
  // var box = Math.floor(960 / input);
  for (var i = 0; i < (input); i++) {
    $("#controls").append('<div class="square"></div>');
  };
  // $(".square").css("width",box);
  // $(".square").css("height",box);
}


function build_canvas(input){
  // var box = Math.floor(960 / input);
  for (var i = 0; i < (input); i++) {
    for (var j = 0; j < (input); j++) {
      $("#artboard").append('<div class="canvas" id="'+j+'"></div>'); 
    }
      $("#artboard").append('<div class="canvas_row"></div>');
  };
  // $(".canvas").css("width",box);
  // $(".canvas").css("height",box);
}

//source: https://github.com/kriox26/odin_project/blob/master/sketchpad/js/script.js

function createErase(name){
    var $input_erase = $('<input type="button" class="erase_button" id="name" value="Erase" />');
    $input_erase.appendTo($("#controls"));
}


function createClear(name){
  var $input_clear = $('<input type="button" class="clear_button" id="name" value="Clear" />');
  $input_clear.appendTo($("#controls"));
}


