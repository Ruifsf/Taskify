<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { ref } from 'vue';
import draggable from 'vuedraggable';

const taskStore = useTaskStore();
const newTask = ref('');
const newTaskType = ref('');

function addNewTask() {
    taskStore.createTask(newTask.value, newTaskType.value);
    newTaskType.value = "";
    newTask.value = "";
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
                    <draggable :list="taskStore.todoArr" tag="ul" group="people">
                        <template #item="{ element }">
                            <li :key="element.order">{{ element.title }}</li>
                        </template>
                    </draggable>
                </ul>
            </div>
            <div>Ongoing
                <ul>
                    <draggable :list="taskStore.ongoingArr" tag="ul" group="people">
                        <template #item="{ element }">
                            <li :key="element.order">{{ element.title }}</li>
                        </template>
                    </draggable>
                </ul>
            </div>
            <div>Done
                <ul>
                    <draggable :list="taskStore.doneArr" tag="ul" group="people">
                        <template #item="{ element }">
                            <li :key="element.order">{{ element.title }}</li>
                        </template>
                    </draggable>
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