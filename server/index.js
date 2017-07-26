import express from 'express'

import ejs from 'ejs'

const _PORT = process.env.PORT || 3000
let app = express()

app.set('views', `${__dirname}/../views`)
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(_PORT, () => {
  console.log(`Server is running on port ${_PORT}`)
})
