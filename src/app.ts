import express from 'express'

import { routes } from './routes'

const app = express()
app.use(express.json())

app.use('/api/v1', routes)

app.listen(8000, () => {
    console.log('SERVER UP')
})
