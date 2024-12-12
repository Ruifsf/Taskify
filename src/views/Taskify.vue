<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const store = useCounterStore();

</script>
<template>
    <div>
        <h1>Taskify page</h1>
        <div class="column">
            <div>Todo</div>
            <div>Ongoing</div>
            <div>Done</div>
        </div>
        <div>Count is: {{ store.count }}</div>
        <button @click="store.increment">Add to Count</button>
    </div>
</template>

<style>
.column {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>