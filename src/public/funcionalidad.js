var resNo = document.getElementById('resNo');
var pantalla = document.querySelectorAll('#total #up');
var pantallaDos = document.getElementById('upp');

pantalla.forEach((elemento)=>{
    elemento.addEventListener('click', ()=>{
        pantallaDos.style.display = "flex";
        
});
});

resNo.addEventListener('click', ()=>{
    pantallaDos.style.display ="none";
});
