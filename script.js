const interface = document.querySelector(".interface");
const container = document.querySelector(".removeButton");
const save = document.getElementById("book-form")

var checkBox = document.getElementById("myCheck");

function Book(title, author, pages) {
  this.title = save.title.value,
    this.author = save.author.value,
    this.pages = save.pages.value
}

function createBook() {
  document.getElementById("btnSave").addEventListener("click", e => {
    let userInput = new Book(title, author, pages);
    const cont = document.createElement("div");
    cont.setAttribute("class", "cont");
    const newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    interface.appendChild(newCell);

    var titleBtn = document.createElement("a");
    titleBtn.setAttribute("id", "cellText");
    titleBtn.innerHTML = userInput.title;
    newCell.appendChild(titleBtn);

    var authorBtn = document.createElement("a");
    authorBtn.setAttribute("id", "cellText");
    authorBtn.innerHTML = userInput.author;
    newCell.appendChild(authorBtn);

    var pagesBtn = document.createElement("a");
    pagesBtn.setAttribute("id", "cellText");
    pagesBtn.innerHTML = userInput.pages;
    newCell.appendChild(pagesBtn);

    var readBtn = document.createElement("a");
    readBtn.setAttribute("id", "cellText");
    readBtn.setAttribute("class", "readBtn");
    if (checkBox.checked == true) {
      readBtn.innerHTML = "yes";
    } else {
      readBtn.innerHTML = "no";
    }
    newCell.appendChild(readBtn);

    var removeBtn = document.createElement("button");
    removeBtn.setAttribute("class", "remove");
    removeBtn.innerHTML = "x";
    newCell.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
      newCell.parentNode.removeChild(newCell);
    });
    readBtn.addEventListener('click', () => {
      if (readBtn.innerHTML == "yes") {
        readBtn.innerHTML = "no";
      } else if (readBtn.innerHTML == "no") {
        readBtn.innerHTML = "yes";
      }
    });
  });
}

createBook();

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