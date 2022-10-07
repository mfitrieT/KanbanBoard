<template>
    <div>
        <div :class="bodyDarkClass()">
        </div>
        <b-row class="KanbanBody">
            <b-form :class="formClass()" @submit.prevent="submitData()">
                <b-icon-plus-circle title="Close" class="formTaskInput__btnClose" @click="btnClickCloseInputForm()"></b-icon-plus-circle>
                <b-form-group
                    id="formTaskInput__groupCardTitle"
                    class="formTaskInput__groupCardTitle"
                    label="Card Title"
                    label-for="formTaskInput__cardTitle"
                >
                    <b-form-input
                        id="formTaskInput__cardTitle"
                        class="formTaskInput__cardTitle"
                        v-model="formInputData.Title"
                        type="text"
                        placeholder="Card title"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Severity"
                    label-for="input-1"
                >
                    <b-form-select
                        id="input-1"
                        class="formTaskInput__cardSeverity"
                        v-model="formInputData.Severity"
                        :options="taskSeverityOptions"
                        required
                    >
                    </b-form-select>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Task Details"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDetails"
                        v-model="formInputData.Details"
                        type="text"
                        placeholder="Task Details"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Owner Name"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardOwnerName"
                        v-model="formInputData.OwnerName"
                        type="text"
                        placeholder="Owner Name"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Due Date"
                    label-for="input-1"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDate"
                        v-model="formInputData.DueDate"
                        type="date"
                        placeholder="Due Date"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-button 
                    class="formTaskInput__btnSubmit" 
                    type="submit" 
                    variant="primary" 
                    >
                        Submit
                </b-button>
            </b-form>
            
            <b-col class="colProject">
                <b-col class="colProject__title">
                    Kanban
                    <b-icon-list-task class="colProject__iconTitle"></b-icon-list-task>
                </b-col>
                <b-col class="colProject__projectList">
                    <button-project :isActive="true"></button-project>
                    <button-project :isActive="false"></button-project>
                    <b-button variant="success" class="colProject__buttonCreate">Create Project</b-button>
                </b-col>
            </b-col>
            <b-col class="colTasks" cols="10">
                <b-col class="colTasks__header">Project 1</b-col>
                <b-col class="colTasks__taskActivity">
                    <b-row style="width: 100%" class="colTasks__taskComponent">
                        <b-col class="colTasks__taskList">
                            <b-col class="colTasks__titleTaskList">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask" @click="openForm()"></b-icon-plus-square>
                                <span>Tasks List</span>
                            </b-col>
                            <b-card-group columns class="colTasks__listTaskCard" v-for="task in TaskListData" :key="task.id">
                                <card-task 
                                    :title="task.cardTitle" 
                                    :severity="task.severity" 
                                    :content="task.content" 
                                    :OwnerName="task.OwnerName" 
                                    :DueDate="task.DueDate"
                                    @btn-delete="deleteTaskList(task.id)"
                                    >
                                </card-task>
                            </b-card-group>
                        </b-col>
                        <b-col class="colTasks__inProgress">
                            <b-col class="colTasks__titleInProgress">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask"></b-icon-plus-square>
                                <span>In Progress</span>
                            </b-col>
                            <b-card-group columns class="colTasks__listTaskCard">
                                <card-task></card-task>
                            </b-card-group>
                        </b-col>
                        <b-col class="colTasks__taskDone">
                            <b-col class="colTasks__titleTaskDone">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask"></b-icon-plus-square>
                                <span>Task Done</span>
                            </b-col>
                            <b-card-group columns class="colTasks__listTaskCard">
                                <card-task></card-task>
                            </b-card-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BIconPlusCircle, BIconListTask, BIconPlusSquare} from 'bootstrap-vue'
import Swal from 'sweetalert2';
import Toastify from 'toastify-js';
import moment from 'moment';
// import {liveQuery} from 'dexie';


import db from '../assets/script/db';
import ButtonProject from './ButtonProject.vue'
import CardTask from './CardTask';
export default {
    name: "KanbanHome",
    data() {
        return {
            closeInputClass: ['formTaskInput', 'formTaskInput formTaskInput--close', 'bodyDark', 'bodyDark bodyDark--close'],
            formInputOpen: 'formTaskInput',
            bodyDarkOpen: 'bodyDark',
            taskSeverityOptions: ['Low','Moderate','High'],
            formInputData: {
                Title: '',
                Severity: '',
                Details: '',
                OwnerName: '',
                DueDate: '',
            },
            TaskListData: [],
            TaskInProgressData: [],
            TaskDoneData: []
        }
    },
    components:{
        BIconPlusCircle,
        BIconListTask,
        BIconPlusSquare,
        ButtonProject,
        CardTask
    },
    methods: {
        btnClickCloseInputForm(){           
            this.closeForm();
        },
        bodyDarkClass(){
            return `${this.bodyDarkOpen}`;
        },
        formClass(){
            return `${this.formInputOpen}`;
        },
        openForm(){
            this.formInputOpen = this.closeInputClass[0];
            this.bodyDarkOpen = this.closeInputClass[2];
        },
        closeForm(){
            this.formInputOpen = this.closeInputClass[1];
            this.bodyDarkOpen = this.closeInputClass[3];
        },
        async submitData(){
            try {
                const id = await db.TaskList.add({
                    cardTitle: this.formInputData.Title ,
                    severity: this.formInputData.Severity,
                    content: this.formInputData.Details,
                    OwnerName: this.formInputData.OwnerName,
                    DueDate: moment(this.formInputData.DueDate).format("MMM Do YY"),
                });

                const data = await db.TaskList.get(id);
                this.TaskListData.push(data);
                this.toastDone('Task Added!');
                this.clearTheForm();

            } catch (error) {
                console.log(error);
            }
            this.closeForm();
        },
        clearTheForm(){
            Object
                .keys(this.formInputData)
                .forEach(key =>{
                    this.formInputData[key] = '';
                })
        },
        async deleteTaskList(id){
            try {
                const data = this.TaskListData;

                const alertBox = await Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                });
                
                if(alertBox.isConfirmed){
                    await db.TaskList.delete(id);
                    const value = data.find((el)=>{
                        // console.log(index);
                        return el.id === id
                    });
    
                    data.splice(data.indexOf(value), 1);
                    this.toastDone('Delete Successful!');
                }else{
                    return;
                }


            } catch (error) {
                console.log(error);
            }
        },
        toastDone(toastText){
            Toastify({
                text: toastText,
                className: "info",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();
        }
        
    },
    mounted() {
        this.formInputOpen = this.closeInputClass[1];
        this.bodyDarkOpen = this.closeInputClass[3];
        
        const viewTaskListData = async ()=>{
            const data = await db.TaskList.toArray();
            data.forEach(el => {
                this.TaskListData.push(el);
            });
        }
        viewTaskListData();
    },
}
</script>

<style lang="scss">
    @import "toastify-js/src/toastify.css";

    :root{
        --softBorderColor: #d5d5d5;
        --lightDark: #eee;
        --lightGreen: #41d262;
        --doubleLightGreen: #e6f9ea;
        --lightRed: #e74c3c;
        --doubleLightRed: #fbe5e3;
        --lightOrange: #f39c12;
        --doubleLightOrange: #fef4e4;
        --beforeBorder: #fff;

    }

    *{
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
    }

    .bodyDark{
        position: absolute;
        z-index: 4;
        height: 100vh;
        width: 100vw;
        background-color: #000;
        opacity: 50%;
    }

    .bodyDark--close{
        display: none;
    }
    
    .KanbanBody{
        margin-left: 0;
        height: 100vh;
        position: relative;
    }

    .formTaskInput{

        &__btnClose{
            cursor: pointer;
            transform: rotate(40deg);
            color: red; 
            position: absolute;
            left: 90%;
            bottom: 90%;
            width: 1.5rem;
            height: 1.5rem;
        }

        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #41d262;
        border-radius: 0.5rem;
        padding: 3rem;
        width: 50%;
        text-align: start;

        &__cardTitle,
        &__cardSeverity,
        &__cardDetails,
        &__cardOwnerName,
        &__cardDate{
            // width: 50%;
            // margin-left: auto;
            // margin-right: auto;
        }
    }

    .formTaskInput--close{
        display: none;
    }

    .colProject,
    .colTasks{
        padding: 0;
    }

    .colProject{
        // background-color: yellow;
        // border-color: var(--green);
        
        &__title,
        &__projectList{
            border: 1px solid var(--softBorderColor);
        }

        &__title{
            // background-color: red;
            height: 10vh;
            padding: 1rem;
            font-weight: 700;
            font-size: 1.5rem;
            border-bottom: 0;
        }

        &__iconTitle{
            color: var(--lightGreen);
        }

        &__projectList{
            // background-color: aqua;
            height: 90vh;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }

        &__buttonCreate{
            margin-top: 1rem;
        }
    }


    .colTasks{
        background-color: var(--lightDark);

        &__header{
            // background-color: azure;
            background-color: #fff;
            height: 10vh;
            padding: 1rem;
            text-align: start;
            font-size: 1.5rem;
            font-weight: 600;
            border-bottom: 1px solid var(--softBorderColor);
        }
        
        &__taskActivity{
            // background-color: bisque;
        }

        &__taskComponent{
            height: 90vh;
            margin-right: 0;
            margin-left: 0;
            gap: 1rem;
        }
        &__taskList,
        &__inProgress,
        &__taskDone{
            border-radius: 0.5rem;
            margin-bottom: 1rem;
            margin-top: 1rem;
            background-color: #fff;
        }

        &__titleTaskList,
        &__titleInProgress,
        &__titleTaskDone{
            display: flex;   
            gap: 1rem;
            // background-color:violet;
            padding: 1rem;
            font-weight: 600;

        }

        &__btnCreateTask{
            width: 1.5rem;
            height: 1.5rem;
            cursor: pointer;
            color: var(--lightGreen);
        }
        
        &__listTaskCard{
            margin-top: 1rem;
            display: grid;
            gap: 1rem;
        }


    }
</style>