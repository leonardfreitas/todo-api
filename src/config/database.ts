import { Task } from '../models/task-model'
import { v4 as uuidv4 } from 'uuid'


export const tasks: Task[] = [
    new Task(uuidv4(), 'Fazer Café'),
]