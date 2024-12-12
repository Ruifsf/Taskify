import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', () => {
    //TODO: add add'r functions.

    const todoArr = ref([
        {
            "title" : "entry 1",
            "order" : 1,
            "fixed" : false
        },
        {
            "title" : "entry 2",
            "order" : 2,
            "fixed" : false
        }
    ]);


    const ongoingArr = ref([
        {
            "title" : "entry 3",
            "order" : 1,
            "fixed" : false
        },
        {
            "title" : "entry 4",
            "order" : 2,
            "fixed" : false
        }
    ]);

    const doneArr = ref([
        {
            "title" : "entry5",
            "order" : 1,
            "fixed" : false
        },
        {
            "title" : "entry 6",
            "order" : 2,
            "fixed" : false
        }
    ])

    return { todoArr, ongoingArr, doneArr }

})