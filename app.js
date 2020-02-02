let submitButton = document.querySelector('#submit');
let listTodo = [];


submitButton.addEventListener('click', function(){
  addTodo();
});

function enterAddTodo(event) {
if (event.keyCode == 13){
    addTodo();
}
};

function addTodo () {
    let todo = document.querySelector('#todo').value;
    listTodo.push(todo);
    document.querySelector('#todo').value = '';
    show();
    console.log(listTodo)
};


function show () {
    let listItems = document.querySelector('#listItems');
    listItems.innerHTML = '';
    for (let i = 0; i < listTodo.length; i++) {
        listItems.innerHTML += `<div>
                                <p id='listP'>${listTodo[i]}</p>
                                <input type="checkbox" id="checkbox">
                                <button id="delete" onClick='removeItem(${i})'>Delete</button>
                                <hr>
                                </div>`
    }
};
     

function removeItem(i) {
 listTodo.splice(i, 1);
 show();
};

listItems.addEventListener('click', done);

function done (e){
    if(e.target.type === 'checkbox'){
        e.target.parentNode.classList.toggle("red");
    }
}




