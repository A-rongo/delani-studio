$(document).ready(function () {
  $(".design").click(function () {
    $(".design").toggle();
    $(".card-body44").toggle();
  });

  $(".development").click(function () {
    $(".development").toggle();
    $(".card-boy").toggle();
  });
  $(".product").click(function () {
    $(".product").toggle();
    $(".card-bdy").toggle();
  });

// $(".submit").click(function(){
//   alert("we have recieved your message thank you for reaching out to us");
// });
  
let imgUrl = 'images/c_image.jpg'
  $(".comment-section").css("background-image",'url('+imgUrl+')');

});
