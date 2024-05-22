import { Task } from "models/task-model"
import { TasksRepository } from "../repositories/tasks-repository"

export class ListTasksService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public async exec(): Promise<Task[]> {
        const tasks = await this.tasksRepository.listAll()
        return tasks
    }
}
