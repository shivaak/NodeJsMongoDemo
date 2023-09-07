const mongoose = require('mongoose')
require('dotenv').config()

const database = async ()=>{
    try {
        console.log(process.env.DATABASE_URL)
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser : true,
            useUnifiedTopology: true
        }).then(()=> {
            console.log("Database connection successful.")
        }).catch((err)=>{
            console.log("Error connecting to DB ", err)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = database