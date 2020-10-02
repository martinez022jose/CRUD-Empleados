var resNo = document.getElementById('resNo');
var pantalla = document.querySelectorAll('#total #up');
var pantallaDos = document.getElementById('upp');
var add = document.getElementById('add');
var formulario = document.getElementById('form');


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
