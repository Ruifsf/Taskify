<script setup>
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue';

const taskStore = useTaskStore();
const newTask = ref('');
const newTaskType = ref('');

function addNewTask() {
    taskStore.createTask(newTask.value, newTaskType.value);
    newTaskType.value = "";
    newTask.value = "";
    //TODO: change to call store task
}

</script>

<template>
    <div>
        <h1>Taskify page</h1>
        <div>
            <h1>Create Task</h1>
            <form @submit.prevent="addNewTask">
                <input v-model="newTask" required placeholder="Task Name">
                <select v-model="newTaskType" required>
                    <option disabled value="">Select Task Type</option>
                    <option v-for="type in taskStore.taskTypes" :value="type">{{ type }}</option>
                </select>
                <button>Add Task</button>
            </form>
        </div>
        <div class="column">
            <div>Todo
                <ul>
                    <li v-for="task in taskStore.todoArr" :key="task.order">{{ task.title }}</li>
                </ul>
            </div>
            <div>Ongoing
                <ul>
                    <li v-for="task in taskStore.ongoingArr" :key="task.order">{{ task.title }}</li>
                </ul>
            </div>
            <div>Done
                <ul>
                    <li v-for="task in taskStore.doneArr" :key="task.order">{{ task.title }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>
.column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>