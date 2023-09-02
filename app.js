var screen = document.getElementById("screen");
var list = document.getElementById("list");
var todoList = [];


function render(){
    list.innerHTML="";
    for(var i=0;i<todoList.length;i++){
        list.innerHTML+=`<li>${todoList[i]}</li> <button class="buttons" onclick="updateTodo(${i})">Update</button> <button class="buttons" onclick="deleteTodo(${i})">Delete</button>`
    };
};
//Function for add user values into the list:
function addTodo(){
    if (screen.value === "") {
        alert("Please enter a task in the input field.");}
        else{
    todoList.push(screen.value);
    screen.value="";
    render();
        }
};

//Function to update the user values through prompt:
function updateTodo(indexNumber){
    todoList[indexNumber] = prompt("Enter the updated value :");
    render();
};


//Function to delete the value:
function deleteTodo(indexNumber){
    todoList.splice(indexNumber,1);
    render();
};

//Function to DeleteAll values:
function deleteAll(){
    todoList = [];
    list.innerHTML=" ";
};