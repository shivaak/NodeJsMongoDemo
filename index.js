const express = require('express')
const app = express()
const database = require('./database')
const router = require('./router/todoRouter')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

database()
app.use(router)

app.listen("3000", ()=> {
    console.log("Server started at 3000...")
})