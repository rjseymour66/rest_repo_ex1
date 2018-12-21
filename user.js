const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
})
mongoose.model('User', UserSchema)

module.exports = mongoose.model('User')

app.post('/users/signup', (req, res) => {
  let body = req.body
  let user = new User(body)
  user.save().then(() => {
    res.status(200).send()
  })
  .catch((e) => {
    res.send(400).send(e)
  })
})

app.get('/users/data', (req, res) => {
  Sale.find().then((data) => {
    res.status(200).send(JSON.stringify(data, undefined, 2))
  })
  .catch((e) => {
    res.status(400).send(e)
  })
})