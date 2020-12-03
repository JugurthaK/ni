const express = require('express')
let app = express()

app.use(express.static('./dist/'))

app.get('/*', (req, res) => res.sendFile('index.html', { root: './dist/' }))

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on http://localhost:${process.env.PORT || 8080}`)
)