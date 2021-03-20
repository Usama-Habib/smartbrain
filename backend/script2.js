const express = require('express');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

const person ={
	name:"Usama",
	age:'About to die',
	dateofbirth:'02/03/1997'
}

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send(person)
})

app.get('/me', (req, res) => {
  res.send(person)
})

app.post('/me', (req, res) => {
  res.send(person)
  console.log(req.body)
})

app.use((req,res,next) => {
	console.log('Helloooooooooooooooo!');
	next();
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
