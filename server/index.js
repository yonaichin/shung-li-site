import express from 'express'
import ejs from 'ejs'
import _ from 'lodash'

import _CONFIG from '../config.json'

const _PORT = process.env.PORT || 3000
const env = process.env.NODE_ENV || 'development'
let app = express()

app.set('views', `${__dirname}/../views`)
app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', _.assign({}, _CONFIG, { env }))
})

app.listen(_PORT, () => {
  console.log(`Server is running on port ${_PORT}`)
})
