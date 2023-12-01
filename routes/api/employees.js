const express = require('express');
const { getAllEmployees,createNewEmployee, updateEmployee, deleteEmployee, getEmployee } = require('../../controllers/employeesController');
const router = express.Router();
const data = {};
data.employees = require('../../model/employees.json');

router.route('/')
      .get(getAllEmployees)
      .post(createNewEmployee)
      .put(updateEmployee)
      .delete(deleteEmployee)
router.route('/:id')
      .get(getEmployee);

module.exports = router;