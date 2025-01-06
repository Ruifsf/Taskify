import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', () => {
  let taskId = 6

  const todoArr = ref([
    {
      title: 'entry 1',
      order: 1,
      id: 0,
    },
    {
      title: 'entry 2',
      order: 2,
      id: 1,
    },
  ])

  const ongoingArr = ref([
    {
      title: 'entry 3',
      order: 1,
      id: 2,
    },
    {
      title: 'entry 4',
      order: 2,
      id: 3,
    },
  ])

  const doneArr = ref([
    {
      title: 'entry 5',
      order: 1,
      id: 4,
    },
    {
      title: 'entry 6',
      order: 2,
      id: 5,
    },
  ])

  function createTask(taskName: string, taskType: string) {
    let newTask = {
      title: taskName,
      order: taskId,
      id: taskId,
    }

    switch (taskType) {
      case 'todo':
        todoArr.value.push(newTask)
        taskId++
        break
      case 'ongoing':
        ongoingArr.value.push(newTask)
        taskId++
        break
      case 'done':
        doneArr.value.push(newTask)
        taskId++
        break
      default:
        break
    }
  }

  const taskTypes = ref(['todo', 'ongoing', 'done'])

  return { todoArr, ongoingArr, doneArr, taskTypes, createTask }
})
