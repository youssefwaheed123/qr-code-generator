$(document).ready(function () {
  $(".btn").click(function () {
    var inputText = $("#inputBox").val();
    if (inputText) {
      var qr = new QRious({
        element: document.getElementById("qr-code"),
        value: inputText,
        size: 200,
      });
      $(".text-box").hide();
      $("#qr-container").removeClass("d-none");
    } else {
      alert("Please enter a URL");
    }
  });
});
