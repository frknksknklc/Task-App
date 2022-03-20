require('../src/db/mongoose')
const res = require('express/lib/response')
const Task = require('../src/models/task')

Task.findByIdAndDelete('6230e637384deda6ae1f7523').then((task) =>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result) =>{
    console.log(result)
}).catch((e) =>{
    console.log(e)
})