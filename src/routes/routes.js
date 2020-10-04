const express = require('express');
const route = express.Router();
const Empleado = require('../models/empleado.js');
const bodyParser = require('body-parser');
//const { Router } = require('express');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

route.get('/', urlencodedParser, async (req, res) => {
    const empleados = await Empleado.find();
    res.render('index.html',
     {empleados: empleados,});
});

route.get('/update/:id', async (req, res) =>{
    const id = req.params.id;
    const empleado = await Empleado.findById(id);
    res.render('update.html',{empleado: empleado});

});

route.post('/update/:id',urlencodedParser, async (req, res) => {
    const id = req.params.id;
    await Empleado.findByIdAndUpdate(id, req.body);
    res.redirect('/');
});

route.post('/add', urlencodedParser, async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.redirect('/');
});

route.get('/done/:id', async (req, res) =>{
    const id = req.params.id;
    const empleado = await Empleado.findById(id);
    empleado.status = !empleado.status;
    await empleado.save();
    res.redirect('/');
})

route.get('/renderDelete/:id', async (req, res) => {
    const idEmpleado = req.params.id;
    const empleado = await Empleado.findById(idEmpleado);
    res.render('resDelete.html', {
        empleado: empleado,});
});

route.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Empleado.findByIdAndDelete(id);
    res.redirect('/');
});



module.exports = route;