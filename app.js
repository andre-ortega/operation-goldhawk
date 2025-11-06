const express = require ('express')
const app = express()
const port = process.env.PORT || 65433;

app.get('/', (req, res) => {
  res.send('Hello World! :D')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
