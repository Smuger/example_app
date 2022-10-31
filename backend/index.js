import express from "express";
import { getUsers, createUser, deleteUser} from "./queries.js"

const app = express()
const port = 4000

app.use(express.json());

app.get('/', (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('[Message from server]: Hello World!')
})

app.get('/users', getUsers)
app.post('/users', createUser)
app.delete('/users', deleteUser)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})