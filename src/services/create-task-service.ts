import { TasksRepository } from "../repositories/tasks-repository"

export class CreateTaskService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public exec(name: string): any {
        if (!name) {
            return undefined
        }
        const task = this.tasksRepository.create(name)
        return task
    }
}