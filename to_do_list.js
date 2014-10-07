var toDoList = document.getElementById("toDoForm");
var listItems = document.querySelector("ul");

var updateTodo = function(event) {
		console.log(this);
		if(this.innerText === "Undo"){
			this.innerHTML = "Done";
			this.parentElement.className = "";
		}
		else {
			this.innerHTML = "Undo";
			console.log(this.parentElement.classList);
			this.parentElement.setAttribute("class","strikethrough");
		}
	};

var removeButton = function (event) {
	this.parentNode.remove();
	};


toDoList.addEventListener("submit", function (event) {

    // prevent the data from being sent to the server
    event.preventDefault();

    // create the li
    var listItem = document.createElement("li");
    var title  = this.title.value;
	listItem.innerText = title;

	// create the deleteButton
    var deleteButton = document.createElement("button");
	deleteButton.innerHTML = "Delete";
	deleteButton.addEventListener("click", removeButton);

	// create the undoButton
    var undoButton = document.createElement("button");
	undoButton.innerHTML = "Done";
	undoButton.addEventListener("click", updateTodo);

	// append the li and buttons
	listItems.appendChild(listItem);
	listItem.appendChild(deleteButton);
	listItem.appendChild(undoButton);


	// clears the field
	this.title.value = "";


});





// Reset button

var resetButton = function() {
	var todos = document.querySelectorAll("li");
	for (var i = 0; i <todos.length; i++) {
		todos[i].parentNode.innerHTML = "";
	}
};

var initialize = function(){

document.querySelector("#reset").addEventListener("click",resetButton);
};

window.onload=initialize;