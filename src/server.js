const knex = require('knex')
const app = require('./app')

const { PORT,DB_URL }= require('./config')

const db = knex({
  client:'pg',
  connection: "postgresql://dunder-mifflin@localhost/blogful",
})

app.set('db',db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})