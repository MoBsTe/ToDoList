const input = document.querySelector('input');
const btnAdd = document.querySelector('button');
const lists = document.querySelector('.lists')
const darkMode = document.querySelector('.dark-mode');
const body = document.querySelector('.body');
const mode = document.querySelector('.fa-moon-o');
// const list = document.querySelector('.list');


// add icon mode to html 
darkMode.innerHTML = '<i class="fa fa-moon-o"></i>';

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

    if (input.value == div) {
        alert('sdfs')
    }


    input.value = '';
});





// remove div.list
const remove = function () {

    if (confirm("Are you sure you want to delete?")) {
        // this.remove();
        this.closest('list');
        return true;
    } else {
        return false;
    }
}




// create dark mode 
darkMode.addEventListener('click', () => {
    // change bg color body (dark/light)
    body.classList.toggle('dark_mode_dom')

    // change icons (dark/light) mode
    mode.classList.toggle('fa-sun-o');

})





// исправить удаление list
// исправить dark mode
// если значение input уже добавлено, вывести предупреждение
// довавить возможность менять значение list 

