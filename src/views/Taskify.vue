<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { onMounted, ref } from 'vue';
import draggable from 'vuedraggable';
import TaskItem from '@/components/TaskItem.vue';
import introJs from 'intro.js';

const taskStore = useTaskStore();
const newTask = ref('');
const newTaskType = ref('');

function addNewTask() {
  taskStore.createTask(newTask.value, newTaskType.value);
  newTaskType.value = "";
  newTask.value = "";
}

const intro = introJs();

onMounted(() => {
  const introStarted = localStorage.getItem('ruifsf_introStarted');
  if (!introStarted) {
    intro.start();
    intro.onexit(function () {
      localStorage.setItem('ruifsf_introStarted', 'true');
    });
  }
})

</script>

<template>
  <div>
    <h1>Taskify page</h1>
    <div>
      <h1>Create Task</h1>
      <form @submit.prevent="addNewTask" data-intro='You can create new Tasks here' data-title='Create' data-step='5'
        data-disable-interaction="true">
        <input v-model="newTask" required placeholder="Task Name">
        <select v-model="newTaskType" required>
          <option disabled value="">Select Task Type</option>
          <option v-for="type in taskStore.taskTypes" :value="type">{{ type }}</option>
        </select>
        <button>Add Task</button>
      </form>
    </div>
    <div class="column" data-intro='You can drag tasks between columns. Try it!' data-title='Drag' data-step='4'>
      <div data-intro='Your New tasks!' data-title='Columns' data-step='1' data-disable-interaction="true">Todo
        <ul>
          <draggable :list="taskStore.todoArr" tag="ul" group="people">
            <template #item="{ element, index }">
              <TaskItem :title="element.title" :id="index"></TaskItem>
            </template>
          </draggable>
        </ul>
      </div>
      <div data-intro='Your Ongoing tasks!' data-title='Columns' data-step='2' data-disable-interaction="true">Ongoing
        <ul>
          <draggable :list="taskStore.ongoingArr" tag="ul" group="people">
            <template #item="{ element, index }">
              <TaskItem :title="element.title" :id="index"></TaskItem>
            </template>
          </draggable>
        </ul>
      </div>
      <div data-intro='Your Done tasks!' data-title='Columns' data-step='3' data-disable-interaction="true">Done
        <ul>
          <draggable :list="taskStore.doneArr" tag="ul" group="people">
            <template #item="{ element, index }">
              <TaskItem :title="element.title" :id="index"></TaskItem>
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
