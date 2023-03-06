const input = document.querySelector('.input_text');
const btnAdd = document.querySelector('button');
const lists = document.querySelector('.lists')
const darkMode = document.querySelector('.dark-mode');




// add icon mode to html 
btnAdd.addEventListener('click', () => {

    let div = document.createElement('div');
    div.classList.add('list');
    div.textContent = input.value;
    lists.appendChild(div);


    let div2 = document.createElement('div');
    div2.innerHTML = '<i class="fa fa-close"></i>';
    div2.classList.add('closet');
    div.appendChild(div2);
    div2.addEventListener('click', remove);

    let div3 = document.createElement('div');
    div3.innerHTML = '<i class="fa fa-pencil"></i>';
    div3.classList.add('pen');
    div.appendChild(div3);


    input.value = '';
});





// remove div.list
const remove = function () {
    let list = document.querySelector(".list");
    console.log(list);
    // let lis = document.querySelector('lis')
    // lis.removeChild(list)
}





// create dark mode 
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}





// исправить удаление list
// если значение input уже добавлено, вывести предупреждение
// довавить возможность менять значение list 
