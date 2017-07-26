import express from 'express'
import ejs from 'ejs'

import _CONFIG from '../config.json'

const _PORT = process.env.PORT || 3000
let app = express()

app.set('views', `${__dirname}/../views`)
app.set('view engine', 'ejs')

// app.use('/static', express.static(__dirname + 'public'))
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', _CONFIG)
})

app.listen(_PORT, () => {
  console.log(`Server is running on port ${_PORT}`)
})
