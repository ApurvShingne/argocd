const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello everyone!'))
app.listen(3000, () => console.log('Server ready'))
