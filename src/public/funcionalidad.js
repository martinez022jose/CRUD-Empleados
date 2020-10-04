var add = document.getElementById('add');
var formulario = document.getElementById('form');

var close = document.getElementById('close');

add.addEventListener('click', () => {
    formulario.style.display = "flex";
});

close.addEventListener('click', () => {
    formulario.style.display = "none";
});



