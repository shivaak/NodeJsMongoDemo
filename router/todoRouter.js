const express = require('express')
const router = express.Router()
const todoController = require('../controller/todoController')

router.get("/todo",todoController.getAllTodo)
router.post("/todo/:todo",todoController.createTodo)
router.put("/todo/:id/:newtodo",todoController.updateTodo)
router.delete("/todo/:id",todoController.deleteTodo)

module.exports = router
