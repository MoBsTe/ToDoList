const input = document.querySelector('.input_text');
const btnAdd = document.querySelector('button');
const lists = document.querySelector('.lists')
// const list = document.getElementById('list')
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

    input.value = '';
});





// remove div.list
const remove = function () {

    if (confirm("Are you sure you want to delete?")) {
        // this.remove();
        this.closest("#list");
        return true;
    } else {
        return false;
    }
}




// create dark mode 
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
 }





// исправить удаление list
// если значение input уже добавлено, вывести предупреждение
// довавить возможность менять значение list 
