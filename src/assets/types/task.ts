import type Category from "./category"
import type SubTask from "./sub-task"
import type { EffortScale, Repeater } from "./emuns"

export default interface Task {
  _id: string
  title: string
  description: string
  effortToComplete: EffortScale
  categories: string[] | Category[]
  repeats: Repeater
  completeBy: Date
  brainDumpTask: boolean
  createdAt: Date
  subTasks?: SubTask[]
  archived: boolean
}
