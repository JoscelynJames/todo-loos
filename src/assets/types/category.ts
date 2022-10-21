import type { ChipColor } from "./emuns"

export default interface Category {
  _id: string
  name: string
  color: ChipColor
  createdAt: Date
}