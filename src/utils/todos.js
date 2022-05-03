/* eslint-disable prettier/prettier */
import { nanoid } from 'nanoid'

const todos = []

const baseTodo = {
  id: nanoid(),
  text: 'Something To do',
  completed: false,
}

todos.push(baseTodo)

export const getTodos = () => {
  return todos
}

export const addTodo = (todo) => {
  todos.push(todo)
}