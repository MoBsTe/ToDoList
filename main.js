const input = document.querySelector('.input_text');
const inputSearch = document.querySelector('.search_input')
const btnAdd = document.querySelector('button');
const lists = document.querySelector('.lists');
const darkMode = document.querySelector('.dark-mode');


// add icon mode to html 
btnAdd.addEventListener('click', (e) => {
    e.preventDefault();

    // create div list
    let div = document.createElement('div');
    div.classList.add('list');
    lists.appendChild(div);

    // create div text
    let text = document.createElement('div');
    text.classList.add('text');
    text.textContent = input.value;
    div.appendChild(text);

    //create div pen
    let divClose = document.createElement('div');
    divClose.innerHTML = '<i class="fa fa-close"></i>';
    divClose.classList.add('closet');
    div.appendChild(divClose);
    divClose.addEventListener('click', removel);

    // create div pen
    let divPen = document.createElement('div');
    divPen.innerHTML = '<i class="fa fa-pencil"></i>';
    divPen.classList.add('pen');
    div.appendChild(divPen);
    divPen.addEventListener('click', change_contant);

    // create div confirm
    let divConfirm = document.createElement('div');
    divConfirm.innerHTML = '<i class="fa fa-check"></i>';
    divConfirm.classList.add('confirm');
    div.appendChild(divConfirm);


    input.value = '';
});


// remove div.list
function removel(e) {
    const item = e.target;
    const todo = item.closest('.list')
    todo.remove();
}


// change Text contant 
function change_contant(e) {
    const item = e.target;
    const todo = item.closest('.list');
    const textDiv = todo.querySelector('.text');
    textDiv.style.display = "none";
    const change = document.createElement('input');
    change.value = textDiv.textContent;
    change.classList.add('input_change');
    todo.appendChild(change);
    const divPen = todo.querySelector('.pen')
    divPen.style.display = 'none';
    const divConfirm = todo.querySelector('.confirm');
    divConfirm.style.display = 'block';
    divConfirm.addEventListener('click', confirmbtn);
}


// confirm btn 
function confirmbtn(e) {
    const item = e.target;
    const confirm = item.closest('.list');
    const text = confirm.querySelector('.text');
    let change = confirm.querySelector('.input_change');
    text.textContent = change.value;
    change.remove();
    text.style.display = 'block';
    const divConfirm = confirm.querySelector('.confirm')
    divConfirm.style.display = 'none';
    const divPen = confirm.querySelector('.pen')
    divPen.style.display = 'block';
}


// search input
inputSearch.addEventListener('input', () => {
    const searchValue = inputSearch.value.toLowerCase();
    const list = document.querySelectorAll('.list');
    list.forEach((element) => {
        const text = element.querySelector('.text');
        const textValue = text.textContent.toLowerCase();
        if (searchValue == "" || textValue.includes(searchValue)) {
            element.style.display = 'flex';
        } else {
            element.style.display = 'none';
        }
    })
    console.log(inputSearch.value);
})



// create dark mode 
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}





// если значение input уже добавлено, вывести предупреждение
// поиск 

