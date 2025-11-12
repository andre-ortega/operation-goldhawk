const express = require('express')
const AppError = require('./utils/AppError');
const favicon = require('serve-favicon');

const app = express()
const port = process.env.PORT || 65433;
const path = require('path')

app.use(express.static(path.join(__dirname, './public')))
app.use(favicon(path.join(__dirname, 'public', 'favicon.io')))
app.use(express.static('public'))

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/tour', (req, res) => {
  res.send('tour announcements shortly')
})

app.get('/store', (req, res) => {
  res.send('Store announced soon')
})

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.json({ status: err.statusCode, message: err.message })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke..')
})

app.use((req,res) => {
  console.log('index')
  res.status(404).render('404', { title: 'Pug', message: '404 page' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
