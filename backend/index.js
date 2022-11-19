import express from "express";
import { getUsers, createUser, deleteUser} from "./queries.js"

const app = express()
const port = 4000

console.log("ENV VAR:")
console.log(process.env.HOST_POSTGRES)

app.use(express.json());

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('CONNECTED!')
})

app.get('/users', getUsers)
app.post('/users', createUser)
app.delete('/users', deleteUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})