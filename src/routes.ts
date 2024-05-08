import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const todos = [
    { id: uuidv4(), name: 'Fazer café' }
]

const routes = Router()

routes.get('/tasks', (req, res) => {
    return res.json(todos)
})

routes.get('/tasks/:id', (req, res) => {
    const { id } = req.params
    const task = todos.find((t) => t.id === id)

    if (!task) {
        return res.status(404).json({ "error": "task not found" })
    }

    return res.json(task)
})

routes.post('/tasks', (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(422).json({ "error": "invalid name" })
    }

    const task = { id: uuidv4(), name: name }

    todos.push(task)
    return res.status(201).json(task)
})

export { routes }