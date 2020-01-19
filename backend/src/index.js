const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const { pass } = require('./config/database')

const app = express()

mongoose.set('useCreateIndex', true);

mongoose.connect(`mongodb+srv://omnistack:${pass}@cluster0-ghffz.mongodb.net/week10?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('Servidor iniciado na porta 3333')
})

