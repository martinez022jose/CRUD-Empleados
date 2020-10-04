const express = require('express');
const route = express.Router();
const Empleado = require('../models/empleado.js');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });

//Raiz
route.get('/', urlencodedParser, async (req, res) => {
    const empleados = await Empleado.find();
    res.render('index.html',
     {empleados: empleados,
      title: "CRUD Node Js - Mongo DB"});
});

//routes Update
route.get('/renderUpdate/:id', async (req, res) =>{
    const id = req.params.id;
    const empleado = await Empleado.findById(id);
    res.render('update.html',{empleado: empleado,
                              idMongo: id,
                              title: "Update"});
});

route.post('/update/:id',urlencodedParser, async (req, res) => {
    const id = req.params.id;
    await Empleado.findByIdAndUpdate(id, req.body);
    res.redirect('/');
});

//Route Add
route.post('/add', urlencodedParser, async (req, res) => {
    const empleado = new Empleado(req.body);
    await empleado.save();
    res.redirect('/');
});

//Route status
route.get('/active/:id', async (req, res) =>{
    const id = req.params.id;
    const empleado = await Empleado.findById(id);
    empleado.status = !empleado.status;
    await empleado.save();
    res.redirect('/');
})

//Routes Delete
route.get('/renderDelete/:id', async (req, res) => {
    const idEmpleado = req.params.id;
    const empleado = await Empleado.findById(idEmpleado);
    res.render('resDelete.html', {
        empleado: empleado,
        title: "Delete"});
});

route.get('/delete/:id', async (req, res) => {
    const id = req.params.id;
    await Empleado.findByIdAndDelete(id);
    res.redirect('/');
});

//Route Close
route.get('/cierre', (req, res) => {
    res.redirect('/');
});

module.exports = route;