import { Injectable } from '@angular/core';
import { NewTaskData, Task } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  private tasks: Task[] = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master angular',
      summary: 'Learn all the basics and master proejct management',
      dueDate: '2025-02-20',
    },
    {
      id: 't2',
      userId: 'u2',
      title: 'Master angularjs',
      summary: 'Learn all the basics and master proejct management',
      dueDate: '2025-02-20',
    },
    {
      id: 't3',
      userId: 'u4',
      title: 'Master react ad redix',
      summary: 'Learn all the basics and master proejct management',
      dueDate: '2025-02-20',
    },
    {
      id: 't4',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't5',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    },
  ];

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getUserTasks(userId: string) {
    return this.tasks.filter((task) => task.userId === userId);
  }

  addTask(taskData: NewTaskData, userId: string) {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.date,
    });
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
