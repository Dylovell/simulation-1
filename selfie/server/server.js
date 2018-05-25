const express = require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , ctrl = require('./ctrl')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db))

app.get('/api/selfie', ctrl.getAll)
app.post('/api/selfie', ctrl.additem)
// app.delete(`/api/selfie/:id`, ctrl.deleteitem)
// app.put('/api/selfie/:id', ctrl.edititem)

const port = 3030
app.listen(port, () => console.log(`Connected to port ${port}`))