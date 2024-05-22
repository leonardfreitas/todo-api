import { Task } from "../models/task-model"
import { TasksRepository } from "../repositories/tasks-repository"

export class CreateTaskService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(name: string): Promise<Task> {
        if (!name) {
            return undefined
        }

        const tasks = await this.tasksRepository.findByName(name)

        if (tasks.length >= 2) {
            return undefined
        }

        const task = await this.tasksRepository.create(name)
        return task
    }
}