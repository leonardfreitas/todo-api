import { TasksRepository } from "../repositories/tasks-repository"

export class DetailTaskService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public exec(id: string): any {
        const task = this.tasksRepository.getById(id)
        return task
    }
}