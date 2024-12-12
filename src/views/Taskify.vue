<script setup>
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();

</script>

<template>
    <div>
        <h1>Taskify page</h1>
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