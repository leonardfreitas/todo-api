import { Request, Response } from 'express'

import { ListTasksService } from '../services/list-tasks-service'
import { DetailTaskService } from '../services/detail-tasks-service'
import { CreateTaskService } from '../services/create-task-service'

export class TasksController {
    /**
     * GET /tasks
     */
    public async list(request: Request, response: Response): Promise<Response> {
        const listTasksService = new ListTasksService()
        const tasks = await listTasksService.exec()
        return response.json(tasks)
    }

    /**
     * GET /tasks/:id
     */
    public async detail(request: Request, response: Response): Promise<Response> {
        const { id } = request.params
        const detailTaskService = new DetailTaskService()
        const task = await detailTaskService.exec(Number(id))

        if (!task) {
            return response.status(404).json({ "error": "task not found" })
        }

        return response.json(task)
    }

    /**
     * POST /tasks
     */
    public async create(request: Request, response: Response): Promise<Response> {
        const { name } = request.body
        const createTaskService = new CreateTaskService()
        const task = await createTaskService.exec(name)

        if (!task) {
            return response.status(422).json({ "error": "invalid name" })
        }

        return response.status(201).json(task)
    }
}
