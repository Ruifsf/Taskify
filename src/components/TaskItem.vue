<script setup lang="ts">

defineProps({
  title: String,
  id: Number
})
</script>

<template>
  <li :key="id" class="single-task">{{ title }}</li>
</template>

<style>
.single-task {
  cursor: grab;
}

.single-task:active {
  cursor: grabbing;
}
</style>
