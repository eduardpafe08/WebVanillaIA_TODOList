import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: '192.168.1.240',
    user: 'todolist_db',
    password: 'Patata123!Todolist_db',
    database: 'todolist_db'
})
