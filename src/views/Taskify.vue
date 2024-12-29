<script setup lang="ts">
import { useTaskStore } from '@/stores/taskStore';
import { onMounted, ref } from 'vue';
import draggable from 'vuedraggable';
import TaskItem from '@/components/TaskItem.vue';
import introJs from 'intro.js';
import Granim from "granim";

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
  new Granim({
    element: '#canvas-complex',
    direction: 'diagonal',
    isPausedWhenNotInView: true,
    states: {
      "default-state": {
        gradients: [
          [{ color: '#eae8eb', pos: 0 }, { color: '#eae8eb', pos: 0 }, { color: '#eae8eb', pos: 0 }],
          [
            { color: '#e2c6f5', pos: .2 },
            { color: '#f0afaf', pos: .8 },
            { color: '#c7f0d6', pos: 1 }
          ], [
            { color: '#b9ede8', pos: 0 },
            { color: '#f7c588', pos: .2 },
            { color: '#f5bad8', pos: .75 }
          ],
        ]
      }
    }
  });
})

</script>

<template>
  <canvas id="canvas-complex"></canvas>
  <div>
    <div>
      <h1 class="list-name">My Task List</h1>
      <form @submit.prevent="addNewTask" data-intro='You can create new Tasks here' data-title='Create' data-step='5'
        data-disable-interaction="true">
        <input class="task-input" v-model="newTask" required placeholder="Task Name">
        <select class="task-select" v-model="newTaskType" required>
          <option disabled value="">Select Task Type</option>
          <option v-for="type in taskStore.taskTypes" :value="type">{{ type }}</option>
        </select>
        <button class="task-button">Create Task</button>
      </form>
    </div>
    <div class="column-container" data-intro='You can drag tasks between columns. Try it!' data-title='Drag'
      data-step='4'>
      <div class="column" data-intro='Your New tasks!' data-title='Columns' data-step='1'
        data-disable-interaction="true">
        <h3>Todo</h3>
        <draggable :list="taskStore.todoArr" tag="ul" group="people">
          <template #item="{ element, index }">
            <TaskItem :title="element.title" :id="index"></TaskItem>
          </template>
        </draggable>
      </div>
      <div class="column" data-intro='Your Ongoing tasks!' data-title='Columns' data-step='2'
        data-disable-interaction="true">
        <h3>Ongoing</h3>
        <draggable :list="taskStore.ongoingArr" tag="ul" group="people">
          <template #item="{ element, index }">
            <TaskItem :title="element.title" :id="index"></TaskItem>
          </template>
        </draggable>
      </div>
      <div class="column" data-intro='Your Done tasks!' data-title='Columns' data-step='3'
        data-disable-interaction="true">
        <h3>Done</h3>
        <draggable :list="taskStore.doneArr" tag="ul" group="people">
          <template #item="{ element, index }">
            <TaskItem :title="element.title" :id="index"></TaskItem>
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<style>
.column-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  display: flex;
  gap: 2em;
  margin-top: 2em;
}

.column {
  border: 1px solid var(--color-main);
  border-radius: var(--border-l);
  flex: 1;
  padding: 10px;
}

.column h3 {
  text-align: center;
  font-weight: 500;
}

#canvas-complex {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background-color: #eae8eb;
  opacity: 0.6;
}

.task-input {
  height: 28px;
  border-radius: var(--border-s);
  margin-right: 5px;
  border: 1px solid var(--color-main);
  padding: 0.3rem;
}

.task-input:focus-visible {
  border: 1px solid var(--color-second);
  outline: none;
}

.task-select {
  height: 28px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: var(--border-s);
  border: 1px solid var(--color-main);

  color: var(--color-main);
}

.task-select:focus-visible {
  outline: none;
}

.task-button {
  height: 28px;
  border-radius: var(--border-s);
  border: 1px solid var(--color-main);
  padding: 0.3rem;
  background-color: #fff;
  cursor: pointer;
  color: var(--color-main);
}


.task-button:hover {
  background-color: var(--color-fourth);
  border: 1px solid var(--color-second);
}

.list-name {
  margin-bottom: 5px;
}
</style>
