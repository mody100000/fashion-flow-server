const mongoose = require('mongoose')
const { DB_PASSWORD, DB_USERNAME } = process.env
const uri = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.h2j8y.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery', false)
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    sslValidate: true,
  })
  .then(() => {
    console.log('database is connected'.green)
  })
  .catch(err => {
    throw err
  })
