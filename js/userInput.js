
function sendMessage() {
  var name = document.getElementById("input-name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("messege").value;

  var mailtoLink =
    "mailto:13nancyrajput25@gmail.com" +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\n" + message
    );

  window.location.href = mailtoLink;
}
