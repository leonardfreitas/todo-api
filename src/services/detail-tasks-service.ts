import { Task } from "models/task-model"
import { TasksRepository } from "../repositories/tasks-repository"

export class DetailTaskService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(id: number): Promise<Task> {
        const task = await this.tasksRepository.getById(id)
        return task
    }
}