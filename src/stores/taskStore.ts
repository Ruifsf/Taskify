import { ref } from "vue";
import { defineStore } from "pinia";

export const useTaskStore = defineStore('taskStore', () => {
    let taskId = 6;

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
            "title" : "entry 5",
            "order" : 1,
            "fixed" : false
        },
        {
            "title" : "entry 6",
            "order" : 2,
            "fixed" : false
        }
    ])

    function createTask(taskName: string, taskType: string) {
        let newTask = {
            "title" : taskName,
            "order" : taskId,
            "fixed" : false
        };

        switch(taskType){
            case "todo":
                todoArr.value.push(newTask);
                taskId++;
                break;
            case "ongoing": 
                ongoingArr.value.push(newTask);
                taskId++;
                break;
            case "done": 
                doneArr.value.push(newTask);
                taskId++;
                break;
            default: 
                break;
        }
    }

    const taskTypes = ref(["todo", "ongoing", "done"]);

    return { todoArr, ongoingArr, doneArr, taskTypes, createTask }

})