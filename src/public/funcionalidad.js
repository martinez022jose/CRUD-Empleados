var resNo = document.getElementById('resNo');
var pantalla = document.querySelectorAll('#total #up');
var pantallaDos = document.getElementById('upp');

var add = document.getElementById('add');
var formulario = document.getElementById('form');

var deles = document.querySelectorAll('#delete');
var ventanaDelete = document.getElementById('ventanaDelete');
var resNoDelete = document.getElementById('resNoDelete');


deles.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        ventanaDelete.classList.remove('ocultar');
        
    });
});

resNoDelete.addEventListener('click', () => {
    ventanaDelete.classList.add('ocultar');
});


add.addEventListener('click', () => {
        formulario.style.display = "flex";
});

pantalla.forEach((elemento)=>{
    elemento.addEventListener('click', ()=>{
        pantallaDos.style.display = "flex";
        
});
});

resNo.addEventListener('click', ()=>{
    pantallaDos.style.display ="none";
});
