<template>
    <div>
        <div :class="bodyDarkClass()">
        </div>
        <b-row class="KanbanBody">
            <div style="display: none;">
                {{valueFromMediator()}}
            </div>
            <b-form :class="formClass()" @submit.prevent="submitTaskData()">
                <b-icon-plus-circle title="Close" class="formTaskInput__btnClose" @click="closeForm()"></b-icon-plus-circle>
                <!-- Title -->
                <b-form-group
                    id="formTaskInput__groupCardTitle"
                    class="formTaskInput__groupCardTitle"
                    label="Card Title"
                    label-for="formTaskInput__cardTitle"
                    v-if="whichFormIsOpen === 'taskList'"
                >
                    <b-form-input
                        id="formTaskInput__cardTitle"
                        class="formTaskInput__cardTitle"
                        v-model="formInputData.TaskListInput.Title"
                        type="text"
                        placeholder="Card title"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="formTaskInput__groupCardTitle"
                    class="formTaskInput__groupCardTitle"
                    label="Card Title"
                    label-for="formTaskInput__cardTitle"
                    v-else-if="whichFormIsOpen === 'taskInProgress'"
                >
                    <b-form-input
                        id="formTaskInput__cardTitle"
                        class="formTaskInput__cardTitle"
                        v-model="formInputData.TaskInProgressInput.Title"
                        type="text"
                        placeholder="Card title"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="formTaskInput__groupCardTitle"
                    class="formTaskInput__groupCardTitle"
                    label="Card Title"
                    label-for="formTaskInput__cardTitle"
                    v-else-if="whichFormIsOpen === 'taskDone'"
                >
                    <b-form-input
                        id="formTaskInput__cardTitle"
                        class="formTaskInput__cardTitle"
                        v-model="formInputData.TaskDoneInput.Title"
                        type="text"
                        placeholder="Card title"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <!-- Title -->

                <!-- Severity -->
                <b-form-group
                    id="input-group-1"
                    label="Severity"
                    label-for="input-1"
                    v-if="whichFormIsOpen === 'taskList'"
                >
                    <b-form-select
                        id="input-1"
                        class="formTaskInput__cardSeverity"
                        v-model="formInputData.TaskListInput.Severity"
                        :options="taskSeverityOptions"
                        required
                    >
                    </b-form-select>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Severity"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskInProgress'"
                >
                    <b-form-select
                        id="input-1"
                        class="formTaskInput__cardSeverity"
                        v-model="formInputData.TaskInProgressInput.Severity"
                        :options="taskSeverityOptions"
                        required
                    >
                    </b-form-select>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Severity"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskDone'"
                >
                    <b-form-select
                        id="input-1"
                        class="formTaskInput__cardSeverity"
                        v-model="formInputData.TaskDoneInput.Severity"
                        :options="taskSeverityOptions"
                        required
                    >
                    </b-form-select>
                    
                </b-form-group>
                <!-- Severity -->

                <!-- Details -->
                <b-form-group
                    id="input-group-1"
                    label="Task Details"
                    label-for="input-1"
                    v-if="whichFormIsOpen === 'taskList'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDetails"
                        v-model="formInputData.TaskListInput.Details"
                        type="text"
                        placeholder="Task Details"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Task Details"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskInProgress'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDetails"
                        v-model="formInputData.TaskInProgressInput.Details"
                        type="text"
                        placeholder="Task Details"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Task Details"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskDone'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDetails"
                        v-model="formInputData.TaskDoneInput.Details"
                        type="text"
                        placeholder="Task Details"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <!-- Details -->

                <!-- Owner Name -->
                <b-form-group
                    id="input-group-1"
                    label="Owner Name"
                    label-for="input-1"
                    v-if="whichFormIsOpen === 'taskList'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardOwnerName"
                        v-model="formInputData.TaskListInput.OwnerName"
                        type="text"
                        placeholder="Owner Name"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Owner Name"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskInProgress'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardOwnerName"
                        v-model="formInputData.TaskInProgressInput.OwnerName"
                        type="text"
                        placeholder="Owner Name"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Owner Name"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskDone'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardOwnerName"
                        v-model="formInputData.TaskDoneInput.OwnerName"
                        type="text"
                        placeholder="Owner Name"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <!-- Owner Name -->

                <!-- Due Date -->
                <b-form-group
                    id="input-group-1"
                    label="Due Date"
                    label-for="input-1"
                    v-if="whichFormIsOpen === 'taskList'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDate"
                        v-model="formInputData.TaskListInput.DueDate"
                        type="date"
                        placeholder="Due Date"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Due Date"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskInProgress'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDate"
                        v-model="formInputData.TaskInProgressInput.DueDate"
                        type="date"
                        placeholder="Due Date"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <b-form-group
                    id="input-group-1"
                    label="Due Date"
                    label-for="input-1"
                    v-else-if="whichFormIsOpen === 'taskDone'"
                >
                    <b-form-input
                        id="input-1"
                        class="formTaskInput__cardDate"
                        v-model="formInputData.TaskDoneInput.DueDate"
                        type="date"
                        placeholder="Due Date"
                        required
                    >
                    </b-form-input>
                    
                </b-form-group>
                <!-- Due Date -->

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
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask" @click="openForm('taskList')"></b-icon-plus-square>
                                <span>Tasks List</span>
                            </b-col>
                            <draggable :list="TaskListData" group="tasks" @change="taskDataChange" @end="taskClassChange">
                                <b-card-group columns class="colTasks__listTaskCard" v-for="task in TaskListData" :key="task.id">
                                    <card-task 
                                        :title="task.cardTitle" 
                                        :severity="task.severity" 
                                        :content="task.content" 
                                        :OwnerName="task.OwnerName" 
                                        :DueDate="formatDate(task.DueDate)"
                                        @btn-delete="deleteTaskList('taskList', task.id)"
                                        >
                                    </card-task>
                                </b-card-group>
                            </draggable>
                        </b-col>
                        <b-col class="colTasks__inProgress">
                            <b-col class="colTasks__titleInProgress">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask" @click="openForm('taskInProgress')"></b-icon-plus-square>
                                <span>In Progress</span>
                            </b-col>
                            <draggable :list="TaskInProgressData" group="tasks" @change="taskDataChange" @end="taskClassChange">
                                <b-card-group columns class="colTasks__listInProgress" v-for="task in TaskInProgressData" :key="task.id">
                                    <card-task 
                                        :title="task.cardTitle" 
                                        :severity="task.severity" 
                                        :content="task.content" 
                                        :OwnerName="task.OwnerName" 
                                        :DueDate="formatDate(task.DueDate)"
                                        @btn-delete="deleteTaskList('taskInProgress', task.id)"
                                        >
                                    </card-task>
                                </b-card-group>
                            </draggable>
                        </b-col>
                        <b-col class="colTasks__taskDone">
                            <b-col class="colTasks__titleTaskDone">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask" @click="openForm('taskDone')"></b-icon-plus-square>
                                <span>Task Done</span>
                            </b-col>
                            <draggable :list="TaskDoneData" group="tasks" @change="taskDataChange" @end="taskClassChange">
                                <b-card-group columns class="colTasks__listTaskDone" v-for="task in TaskDoneData" :key="task.id">
                                    <card-task 
                                        :title="task.cardTitle" 
                                        :severity="task.severity" 
                                        :content="task.content" 
                                        :OwnerName="task.OwnerName" 
                                        :DueDate="formatDate(task.DueDate)"
                                        @btn-delete="deleteTaskList('taskDone', task.id)"
                                        >
                                    </card-task>
                                </b-card-group>
                            </draggable>
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
import draggable from 'vuedraggable';

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
            whichFormIsOpen: '',
            taskSeverityOptions: ['Low','Moderate','High'],
            formInputData: {
                TaskListInput: {
                    Title: '',
                    Severity: '',
                    Details: '',
                    OwnerName: '',
                    DueDate: '',
                },
                TaskInProgressInput: {
                    Title: '',
                    Severity: '',
                    Details: '',
                    OwnerName: '',
                    DueDate: '',
                },
                TaskDoneInput: {
                    Title: '',
                    Severity: '',
                    Details: '',
                    OwnerName: '',
                    DueDate: '',
                }
            },
            TaskListData: [],
            TaskInProgressData: [],
            TaskDoneData: [],
            DataChangeListener: {
                classChangeListener: {},
                dataListener: {},
                dataAddedIndex: ''
            }
        }
    },
    components:{
        BIconPlusCircle,
        BIconListTask,
        BIconPlusSquare,
        ButtonProject,
        draggable,
        CardTask
    },
    methods: {
        bodyDarkClass(){
            return `${this.bodyDarkOpen}`;
        },
        formClass(){
            return `${this.formInputOpen}`;
        },
        openForm(value){
            this.formInputOpen = this.closeInputClass[0];
            this.bodyDarkOpen = this.closeInputClass[2];
            this.whichFormIsOpen = value;
        },
        closeForm(){
            this.formInputOpen = this.closeInputClass[1];
            this.bodyDarkOpen = this.closeInputClass[3];
            // this.clearTheForm();
        },
        formatDate(taskDate){
            return moment(taskDate).format("MMM Do YY");
        },
        taskDataChange(item){
            // console.log(item);
            const itemRemoved = item.removed;
            const itemAdded = item.added;

            if(itemRemoved){
                const indexItemRemovedData = itemRemoved.oldIndex;
                const itemRemovedData = {...itemRemoved.element};

                // console.log(`Index: ${indexItemRemovedData}`);
                // console.log(itemRemovedData);

                this.DataChangeListener.dataListener = {
                    indexItemRemoved: indexItemRemovedData,
                    ...itemRemovedData
                };
            }

            if(itemAdded){
                const indexItemAddedData = itemAdded.newIndex;
                this.DataChangeListener.dataAddedIndex = indexItemAddedData;
            }

            
        },
        taskClassChange(event){
            // console.log(event);
            const fromClass = event.clone.className.split(' ')[0];
            const toClass = event.to.parentElement.className.split(' ')[0];
            
            // console.log(`From class: '${fromClass}', to class: '${toClass}'`);
            
            this.DataChangeListener.classChangeListener = {
                fromClass,
                toClass
            };
        },
        async valueFromMediator(){
            if(this.DataChangeListener.classChangeListener.fromClass){
                const fromTaskClass = ['listTaskCard', 'listInProgress', 'listTaskDone'];
                const toTaskCardClass = ['taskList','inProgress','taskDone'];

                const fromClass = this.DataChangeListener.classChangeListener.fromClass.split('__')[1];
                const toClass = this.DataChangeListener.classChangeListener.toClass.split('__')[1];
                const addedIndex = this.DataChangeListener.dataAddedIndex; 
                const dataInTask = {...this.DataChangeListener.dataListener}; 

                dataInTask.indexItemAdded = addedIndex;

                if(addedIndex === ''){
                    return;
                }

                //--------TASK LIST OPERATION--------//
                if(fromClass === fromTaskClass[0] && toClass === toTaskCardClass[1]){

                    await this.deleteTaskDB(db.TaskList, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.InProgress, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate);
                    
                    this.TaskInProgressData.push(dataId);
                    this.TaskInProgressData.pop();

                    // console.log(this.TaskInProgressData);
                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);
                }
                if(fromClass === fromTaskClass[0] && toClass === toTaskCardClass[2]){
                    
                    await this.deleteTaskDB(db.TaskList, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.TaskDone, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate)
                    this.TaskDoneData.push(dataId);
                    this.TaskDoneData.pop();

                    // console.log(this.TaskDoneData);
                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);

                }
                //--------TASK LIST OPERATION--------//

                //--------TASK IN PROGRESS OPERATION--------//
                if(fromClass === fromTaskClass[1] && toClass === toTaskCardClass[0]){

                    await this.deleteTaskDB(db.InProgress, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.TaskList, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate)
                    this.TaskListData.push(dataId);
                    this.TaskListData.pop();

                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);

                }
                if(fromClass === fromTaskClass[1] && toClass === toTaskCardClass[2]){

                    await this.deleteTaskDB(db.InProgress, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.TaskDone, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate)
                    this.TaskDoneData.push(dataId);
                    this.TaskDoneData.pop();

                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);

                }
                //--------TASK IN PROGRESS OPERATION--------//
                
                //--------TASK DONE OPERATION--------//
                if(fromClass === fromTaskClass[2] && toClass === toTaskCardClass[0]){

                    await this.deleteTaskDB(db.TaskDone, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.TaskList, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate)
                    this.TaskListData.push(dataId);
                    this.TaskListData.pop();


                    // console.log(this.TaskListData);
                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);

                }
                if(fromClass === fromTaskClass[2] && toClass === toTaskCardClass[1]){

                    await this.deleteTaskDB(db.TaskDone, this.TaskListData, dataInTask.id);
                    const dataId = this.addObjectDB(db.InProgress, dataInTask.id, dataInTask.cardTitle, dataInTask.severity, dataInTask.content, dataInTask.OwnerName, dataInTask.DueDate)
                    this.TaskInProgressData.push(dataId);
                    this.TaskInProgressData.pop();

                    // console.log(`From class: '${fromClass}', to class: '${toClass}'`);

                }
                //--------TASK DONE OPERATION--------//

                // console.log(dataInTask);

                this.DataChangeListener.classChangeListener = {};
                this.DataChangeListener.dataListener = {};
                this.DataChangeListener.dataAddedIndex = '';
            }
            

        },
        async submitFormDataToDB(formType, form){

                if(formType === 'taskList'){
                    return await this.addObjectDB(db.TaskList, new Date().getTime(), form.Title, form.Severity, form.Details, form.OwnerName, form.DueDate);
                }

                if(formType === 'taskInProgress'){
                    return await this.addObjectDB(db.InProgress, new Date().getTime(), form.Title, form.Severity, form.Details, form.OwnerName, form.DueDate);
                }

                if(formType === 'taskDone'){
                    return await this.addObjectDB(db.TaskDone, new Date().getTime(), form.Title, form.Severity, form.Details, form.OwnerName, form.DueDate);
                }

        },
        async submitTaskData(){
            try {
                this.closeForm();

                const formType = ['taskList','taskInProgress','taskDone'];

                if(this.whichFormIsOpen === ''){
                    return;
                }

                if(this.whichFormIsOpen === formType[0]){    
                    const dataId = await this.submitFormDataToDB(formType[0], this.formInputData.TaskListInput);
                    this.TaskListData.push(dataId);
                    this.toastDone('Task list added!');

                    this.whichFormIsOpen = '';
                }
                
                if(this.whichFormIsOpen === formType[1]){
                    const dataId = await this.submitFormDataToDB(formType[1], this.formInputData.TaskInProgressInput);
                    this.TaskInProgressData.push(dataId);
                    this.toastDone('Task in progress added!');

                    // console.log(`Date ${moment(this.formInputData.TaskInProgressInput.DueDate)}`);

                    this.whichFormIsOpen = '';
                }
                if(this.whichFormIsOpen === formType[2]){
                    const dataId = await this.submitFormDataToDB(formType[2], this.formInputData.TaskDoneInput);
                    this.TaskDoneData.push(dataId);
                    this.toastDone('Task done added!');

                    this.whichFormIsOpen = '';
                }

                // this.clearTheForm();

            } catch (error) {
                console.log(error);
            }
            // this.closeForm();
        },
        // clearTheForm(){
        //     Object
        //         .keys(this.formInputData.TaskListInput)
        //         .forEach(key =>{
        //             this.formInputData.TaskListInput[key] = '';
        //         })
        // },
        async addObjectDB(TaskDB, taskId, taskTitle, taskSeverity, taskDetails, taskOwnerName, taskDueDate){
            const id = await TaskDB.add({
                id: taskId,
                cardTitle: taskTitle,
                severity: taskSeverity,
                content: taskDetails,
                OwnerName: taskOwnerName,
                DueDate: taskDueDate,
            });
            return await TaskDB.get(id);
        },
        async deleteTaskList(formType, id){
            try {
                const formTypeList = ['taskList','taskInProgress','taskDone'];

                if(formType === formTypeList[0]){
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
                        const value = await this.deleteTaskDB(db.TaskList, data, id);

                        data.splice(data.indexOf(value), 1);
                        this.toastDone('Delete Successful!');
                    }else{
                        return;
                    }
                }

                if(formType === formTypeList[1]){
                    const data = this.TaskInProgressData;
    
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
                        const value = await this.deleteTaskDB(db.InProgress, data, id);
        
                        data.splice(data.indexOf(value), 1);
                        this.toastDone('Delete Successful!');
                    }else{
                        return;
                    }
                }

                if(formType === formTypeList[2]){
                    const data = this.TaskDoneData;
    
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
                        const value = await this.deleteTaskDB(db.TaskDone, data, id);

                        data.splice(data.indexOf(value), 1);
                        this.toastDone('Delete Successful!');
                    }else{
                        return;
                    }
                }


            } catch (error) {
                console.log(error);
            }
        },
        async deleteTaskDB(TaskDB, TaskData, id){
            await TaskDB.delete(id);
            return TaskData.find((el)=>{
                return el.id === id
            });
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
        
        (async ()=>{
            const taskListData = await db.TaskList.toArray();
            const taskInProgressData = await db.InProgress.toArray();
            const taskDoneData = await db.TaskDone.toArray();
            
            taskListData.forEach(el => {
                this.TaskListData.push(el);
            });

            taskInProgressData.forEach(el => {
                this.TaskInProgressData.push(el);
            });

            taskDoneData.forEach(el => {
                this.TaskDoneData.push(el);
            });
        })();
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
        transition: 0.1s ease-in-out;
    }

    .bodyDark--close{
        // display: none;
        display: block;
        opacity: 0;
        z-index: -1;
    }
    
    .KanbanBody{
        margin-left: 0;
        height: 100vh;
        position: relative;
    }

    .formTaskInput{

        position: absolute;
        z-index: 5;
        top: 50%;
        left: 50%;
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        background-color: #f7f7f7;
        border-radius: 0.5rem;
        padding: 3rem;
        width: 50%;
        text-align: start;
        opacity: 100%;
        // transition: 0.4s ease-in-out;
        transition: 0.4s, transform 0.4s ease-in-out, opacity 0.4s ease-in-out;

        &__btnClose{
            cursor: pointer;
            transform: rotate(40deg);
            color: red; 
            position: absolute;
            left: 91%;
            bottom: 90%;
            width: 1.5rem;
            height: 1.5rem;
        }

        .formTaskInput__btnSubmit{
            margin-top: 1rem;
            width: 100%;
        }
    }

    .formTaskInput--close{
        // display: none;
        display: block;
        opacity: 0;
        z-index: -1;
        -ms-transform: translate(-50%, -60%);
        transform: translate(-50%, -60%);
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
            max-height: 38rem;
            overflow-y: auto;
        }

        // Scrollbar
        ::-webkit-scrollbar{
            width: 6px;
            height: 6px;
        }

        /* Track */
        ::-webkit-scrollbar-track {
            border-radius: 10px;
            background: rgba(0,0,0,0.1);
        }

        /* Handle */
        ::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background: rgba(0,0,0,0.2);

            &:hover{
                background: rgba(0,0,0,0.4);
            }

            &:active{
                background: rgba(0,0,0,0.9);
            }
        }
        // Scrollbar

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
        
        &__listTaskCard,
        &__listInProgress,
        &__listTaskDone
        {
            margin-top: 1rem;
            display: grid;
            gap: 1rem;
        }

        // Media Queries
        @media screen and (min-width: 1920px) {
            &__taskList,
            &__inProgress,
            &__taskDone{
                max-height: 50rem;
            }
        }
        // Media Queries
    }
</style>