/* eslint-disable prettier/prettier */


import express from 'express'
import config from './utils/config'

const app = express()



app.get('/', (req, res) => {
  res.send({ msg: 'Hello Cecilia' })
})

app.listen(config.port)
