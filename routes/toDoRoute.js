var express = require('express')
var todoAppController = require('../controllers/todoController')
var router = express.Router()
 
// list all tasks created
router.get('/v1/tasks', todoAppController.list_tasks)


// create a new tasks
router.post('/v1/tasks', todoAppController.create_task)

// retrieve a task by ID
router.get('/v1/tasks/:taskId',  todoAppController.retrieve_task)
router.delete('/v1/tasks/:taskId', todoAppController.delete_task)
router.put('/v1/tasks/:taskId', todoAppController.update_task)



// // a GET route
// router.get('/about', function(req, res){
//     res.send("A sample GET route")
// })

module.exports = router


