$(document).ready(function () {
  $(".road").hide();
  $(".crossover").hover(function () {
    $(this).find(".road").toggle(400);
  });
});

$(".click0").click(function () {
  $(".hide0").slideToggle(1000);
  $(".show0").slideToggle(1200);
});

$(".click1").click(function () {
  $(".hide1").slideToggle(1000);
  $(".show1").slideToggle(1200);
});

$(".click2").click(function () {
  $(".hide2").slideToggle(1000);
  $(".show2").slideToggle(1200);
});
//Form Validation
$("form#form").on("submit", function (event) {
  event.preventDefault();
  let name = $("input#name").val();
  let email = $("input#email").val();
  let message = $("textarea#message").val();

  if ($("input#name").val() && $("input#email").val()) {
    alert(
      "Hey " +
        name +
        ", Thanks for reaching out, we'll get back to you shortly...cheers"
    );
  } else {
    alert("Please provide your correct name and email!");
  }
});
//  *************RESET FORM*****************
$("button").on("click", function () {
  $("form").each(function () {
    this.reset();
  });
});
