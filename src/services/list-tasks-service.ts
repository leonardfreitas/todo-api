import { TasksRepository } from "../repositories/tasks-repository"

export class ListTasksService {
    private readonly tasksRepository: TasksRepository

    constructor() {
        this.tasksRepository = new TasksRepository()
    }

    public exec(): any {
        const tasks = this.tasksRepository.listAll()
        return tasks
    }
}
