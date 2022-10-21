// brain dumps are tasks without any details
import type Task from "../types/task";
import { categories } from './categories'
import { subTasks } from './sub-tasks'

export const tasks: Task[] = [
  {
    _id: '1',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    effortToComplete: 1,
    categories: [categories[0], categories[1]],
    repeats: 1,
    completeBy: new Date(),
    brainDumpTask: false,
    archived: false,
    createdAt: new Date(),
    subTasks: [subTasks[0], subTasks[3]]
  },
  {
    _id: '2',
    title: 'Lorem ipsum dolor sit amet.',
    description: 'Volutpat est velit egestas dui. Pellentesque sit amet porttitor eget dolor morbi non. Id interdum velit laoreet id. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.',
    effortToComplete: 1,
    categories: [categories[3]],
    repeats: 1,
    completeBy: new Date(),
    brainDumpTask: false,
    archived: false,
    createdAt: new Date(),
    subTasks: [subTasks[1], subTasks[2]]
  },
  {
    _id: '3',
    title: 'Consectetur lorem donec massa sapien faucibus.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    effortToComplete: 1,
    categories: [categories[5]],
    repeats: 1,
    completeBy: new Date(),
    brainDumpTask: false,
    archived: false,
    createdAt: new Date(),
  }
]