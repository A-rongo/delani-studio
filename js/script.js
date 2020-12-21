$(document).ready(function () {
  $(".design").click(function () {
    $(".design").toggle();
    $(".card-body").toggle();
  });

  $(".development").click(function () {
    $(".development").toggle();
    $(".card-boy").toggle();
  });
  $(".product").click(function () {
    $(".product").toggle();
    $(".card-bdy").toggle();
  });
$(".submit").click(function(){
  alert("we have recieved your message thank you for reaching out to us");
});
  

  //    $(".blanks form").submit(function(event) {
  //     var nameInput = $("input.nameInput").val();
  //     var emailInput = $("input.emailInput").val();
  //     var commentInput=$("input.commentInput").val();
  //     $(".name").append(nameInput);
  //     $(".email").append(emailInput);
  //     $("comment").append(commentInput);
  //     $("#story").show();

  //     event.preventDefault();
  //     alert("thank you very much for your comment")
  //    });
});
