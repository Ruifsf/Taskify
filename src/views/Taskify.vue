<script setup>
import { ref } from 'vue';

</script>
<template>
    <div>
        <h1>Taskify page</h1>
        <div class="column">
            <div>Todo</div>
            <div>Ongoing</div>
            <div>Done</div>
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