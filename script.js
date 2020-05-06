const container = document.querySelector(".interface");
const save = document.getElementById("book-form")

document.getElementById("btnSave").addEventListener("click", e => {
  event.preventDefault();
  const book = {
    title: save.title.value,
    author: save.author.value,
    pages: save.pages.value,
  };

  const newCell = document.createElement("div");
  newCell.setAttribute("class", "cell");
  container.appendChild(newCell);

  var btn = document.createElement("a");
  btn.setAttribute("id", "cellText");
  btn.innerHTML = book.title;
  newCell.appendChild(btn);

  var btn1 = document.createElement("a");
  btn1.setAttribute("id", "cellText");
  btn1.innerHTML = book.author
  newCell.appendChild(btn1);

  var btn2 = document.createElement("a");
  btn2.setAttribute("id", "cellText");
  btn2.innerHTML = book.pages;
  newCell.appendChild(btn2);

  var btn3 = document.createElement("a");
  btn3.setAttribute("id", "cellText");
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    btn3.innerHTML = "yes";
  } else {
    btn3.innerHTML = "no";
  }
  newCell.appendChild(btn3);

});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
