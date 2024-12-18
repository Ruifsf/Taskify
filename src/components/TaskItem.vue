<script setup lang="ts">

defineProps({
  title: String,
  id: Number
})
</script>

<template>
  <li :key="id">{{ title }}</li>
</template>
