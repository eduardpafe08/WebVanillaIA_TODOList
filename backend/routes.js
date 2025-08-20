import express from 'express'
import { pool } from './db.js'

const router = express.Router()

router.get('/tareas', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM tareas')
    res.json(rows)
})

router.post('/tareas', async (req, res) => {
    const { texto } = req.body
    await pool.query('INSERT INTO tareas (texto, completada) VALUES (?, ?)', [texto, false])
    res.sendStatus(201)
})

router.put('/tareas/:id', async (req, res) => {
    const { id } = req.params
    const { completada } = req.body
    await pool.query('UPDATE tareas SET completada = ? WHERE ID = ?', [completada, id])
    res.sendStatus(200)
})

router.delete('/tareas/:id', async (req, res) => {
    const { id } = req.params
    await pool.query('DELETE FROM tareas WHERE id = ?', [id])
    res.sendStatus(200)
})

export default router