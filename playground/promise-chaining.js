require('../src/db/mongoose')
const User = require('../src/models/user')

User.findByIdAndUpdate('6230e533d2a064d597736778', {age: 1}).then((user) =>{
    console.log(user)
    return User.countDocuments({age:1})
}).then((result) => {
    console.log(result)
}).catch((e) =>{
    console.log(e)
})