const Empleado  = require('../models/empleado').model

async function get() {
  const allEmpleados = await Empleado.find({}).exec()
  return allEmpleados
}

module.exports={
    get
}