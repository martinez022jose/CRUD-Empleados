var add = document.getElementById('add');
var formulario = document.getElementById('form');
/*
var deles = document.querySelectorAll('#delete');
var ventanaDelete = document.getElementById('ventanaDelete');
var resNoDelete = document.getElementById('resNoDelete');*/

var updates = document.querySelectorAll('#update');
var forUpdate = document.getElementById('formUpdate');

add.addEventListener('click', () => {
    formulario.style.display = "flex";
});

updates.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        forUpdate.classList.remove('ocultar');
    });
});


/*
deles.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        ventanaDelete.classList.remove('ocultar');
        
    });
});

resNoDelete.addEventListener('click', () => {
    ventanaDelete.classList.add('ocultar');
});*/

