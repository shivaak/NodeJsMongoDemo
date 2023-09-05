const Todo = require('../model/todomodel')

const getAllTodo = async (req, resp) => {
    try {
        const success = await Todo.find()
        if(success) {
            resp.status(200).send({success, "message":"OK"})
        }else{
            resp.status(400).send({success, "message":"FAILED"})
        }

    } catch (error) {
        console.log(error);
    }
}

const createTodo = async (req, resp) => {
    try {
        console.log(req.params.todo)
        const success = await Todo.create(
            {
                todo : req.params.todo,
                created_at : new Date()
            })
        if(success) {
            resp.status(200).send({"message":"todo created"})
        }else{
            resp.status(400).send({"message":"Not created"})
        }

    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async (req, resp) => {
    try {
        console.log(req.params.id)
        console.log(req.params.newtodo)
        
        const success = await Todo.findByIdAndUpdate(
            req.params.id, 
            { 
                todo: req.params.newtodo, 
                last_updated : new Date()
            });

                            
       
        if(success) {
            resp.status(200).send({"message":"todo updated"})
        }else{
            resp.status(400).send({"message":"Not updated"})
        }

    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (req, resp) => {
    try {
        console.log(req.params.id)
        
        const success = await Todo.findByIdAndDelete(req.params.id);
       
        if(success) {
            resp.status(200).send({"message":"todo deleted"})
        }else{
            resp.status(400).send({"message":"Not deleted"})
        }

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllTodo,
    createTodo,
    updateTodo,
    deleteTodo
}