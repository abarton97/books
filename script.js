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

  var titleBtn = document.createElement("a");
  titleBtn.setAttribute("id", "cellText");
  titleBtn.innerHTML = book.title;
  newCell.appendChild(titleBtn);

  var authorBtn = document.createElement("a");
  authorBtn.setAttribute("id", "cellText");
  authorBtn.innerHTML = book.author
  newCell.appendChild(authorBtn);

  var pagesBtn = document.createElement("a");
  pagesBtn.setAttribute("id", "cellText");
  pagesBtn.innerHTML = book.pages;
  newCell.appendChild(pagesBtn);

  var readBtn = document.createElement("a");
  readBtn.setAttribute("id", "cellText");
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    readBtn.innerHTML = "yes";
  } else {
    readBtn.innerHTML = "no";
  }
  newCell.appendChild(readBtn);

});

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
