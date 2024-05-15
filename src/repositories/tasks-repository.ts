import { v4 as uuidv4 } from 'uuid'

import { tasks } from "../config/database";
import { Task } from '../models/task-model';

export class TasksRepository {
    public listAll(): Task[] {
        return tasks
    }

    public getById(id: string): Task {
        const task = tasks.find((t) => t.id === id)
        return task
    }

    public create(name: string): Task {
        const task = { id: uuidv4(), name: name }

        tasks.push(task)

        return task
    }
}