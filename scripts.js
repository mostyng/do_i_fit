$(document).ready(function(){
  
  $(".draggable").css("opacity", "0");
  $(".draggable").css("pointer-events", "none");

$('.draggable').draggable({
    appendTo: 'body',
    start: function(event, ui) {
        isDraggingMedia = true;
    },
    stop: function(event, ui) {
        isDraggingMedia = false;
        // blah
    }
});

$( ".resize" ).resizable({
    grid: 10
    });


$(".draggable").dblclick(function(){
  $(this).css("opacity", "0");
  $(this).css("pointer-events", "none");
});

$(".modal").click(function(){
  $(".draggable").css("opacity", "1");
  $(".draggable").css("pointer-events", "initial");
});

// $(".Places").click(function(){
//   $(".draggable.PlacesBut1").css("opacity", "1");
//   $(".draggable.PlacesBut1").css("pointer-events", "initial");
// });
// $(".PlacesBut1").dblclick(function(){
//   $(".draggable.PlacesBut1").css("opacity", "0");
//   $(".draggable.PlacesBut1").css("pointer-events", "none");
// });
// $(".Places").click(function(){
//   $(".draggable.PlacesBut2").css("opacity", "1");
//   $(".draggable.PlacesBut2").css("pointer-events", "initial");
// });
// $(".PlacesBut2").dblclick(function(){
//   $(".draggable.PlacesBut2").css("opacity", "0");
//   $(".draggable.PlacesBut2").css("pointer-events", "none");
// });
// $(".Places").click(function(){
//   $(".draggable.PlacesBut3").css("opacity", "1");
//   $(".draggable.PlacesBut3").css("pointer-events", "initial");
// });
// $(".PlacesBut3").dblclick(function(){
//   $(".draggable.PlacesBut3").css("opacity", "0");
//   $(".draggable.PlacesBut3").css("pointer-events", "none");
// });


$(".draggable").click(function(){
  $(this).toggleClass("clicked");
});



});