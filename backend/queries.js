import pg from "pg"
import os from "os"

const user = process.env.USER_POSTGRES
const host = process.env.HOST_POSTGRES
const database = process.env.DATABASE_POSTGRES
const password = process.env.PASSWORD_POSTGRES
const port = process.env.PORT_POSTGRES

const pool = new pg.Pool({
  user: user,
  host: host,
  database: database,
  password: password,
  port: port,
})

process.env.REACT_APP_BACKEND_ENDPOINT

// Get all users
export const getUsers = (request, response, next) => {
  response.set('Access-Control-Allow-Origin', '*');
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      const code = error.code
      next(code)
      return console.error('I failed while trying to get all users', error);
      
    }
    response.status(200).json(results.rows)
    
  })
}

// Add new user
export const createUser = (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  const name = request.query.name
  const email = request.query.email

  console.log(name)
  console.log(email)

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
    if (error) {
      return console.error('I failed to create new user', error);
    }

    response.status(201).send(`User added with ID: ${results.rows[0].id}`)
  })
}

export const deleteUser = (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  const id = parseInt(request.params.id)
  
  pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      return console.error('I failed to delete user', error);
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}  