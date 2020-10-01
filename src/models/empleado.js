const mogoose = require('mongoose');
const Shema = mogoose.Schema;

const Empleado = new Shema({
    id: Number,
    nombre: String,
    puesto: String,
    sueldo: Number,
    status:{
        type: Boolean,
        default: false
    }

});

module.exports = mogoose.model('Empleado', Empleado);