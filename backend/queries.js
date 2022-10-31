// const Pool = require('pg').Pool
import pg from "pg"
import os from "os"

const pool = new pg.Pool({
  user: os.userInfo().username,
  host: 'localhost',
  database: 'api',
  password: '12345678',
  port: 5432,
})

// Get all users
export const getUsers = (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.set('Access-Control-Allow-Origin', '*');
      response.status(200).json(results.rows)
      
    })
}

// Add new user
export const createUser = (request, response) => {
    const name = request.query.name
    const email = request.query.email

    console.log(name)
    console.log(email)

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
      if (error) {
        throw error
      }
      response.set('Access-Control-Allow-Origin', '*');
      response.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

export const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.set('Access-Control-Allow-Origin', '*');
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  }  