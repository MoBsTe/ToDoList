const input = document.querySelector('.input_text');
const btnAdd = document.querySelector('button');
const lists = document.querySelector('.lists')
const darkMode = document.querySelector('.dark-mode');




// add icon mode to html 
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    let div = document.createElement('div');
    div.classList.add('list');
    div.textContent = input.value;
    lists.appendChild(div);


    let div2 = document.createElement('div');
    div2.innerHTML = '<i class="fa fa-close"></i>';
    div2.classList.add('closet');
    div.appendChild(div2);
    div2.addEventListener('click', removel);


    let div3 = document.createElement('div');
    div3.innerHTML = '<i class="fa fa-pencil"></i>';
    div3.classList.add('pen');
    div.appendChild(div3);


    input.value = '';
});





// remove div.list
function removel(e) {
    const item = e.target;
    const todo = item.closest('.list')
    todo.remove();
    // if (item.classList[0] === "complete-btn") {
    //     const todo = item.parentElement;
    //     todo.classList.toggle("completed");
    //     console.log(todo);
    // }
}


function removeLocalTodos(todo) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}






// create dark mode 
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}





// исправить удаление list
// если значение input уже добавлено, вывести предупреждение
// довавить возможность менять значение list 
