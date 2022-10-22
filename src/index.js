const express = require('express');
const routes = require('./router/index.routes.js');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)
app.use((err, req, res, next) => {
    return res.json({
        message: err.message
    })
})

app.listen('4000')
console.log(`Server on port ${4000}`)