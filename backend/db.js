import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()
const pe = process.env


export const API_PORT = pe.API_PORT
export const HOST = pe.DB_HOST
const USER = pe.DB_USER
const PASSWORD = pe.DB_PASSWORD
const DATABASE = pe.DB_DATABASE

export const pool = mysql.createPool({
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
})
