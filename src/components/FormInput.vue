<template>
    <div>
        <b-form :class="this.formClass" @submit.prevent="submitTaskData()">
            <b-icon-plus-circle title="Close" class="formTaskInput__btnClose" @click="closeForm()"></b-icon-plus-circle>
            <!-- Title -->
            <b-form-group
                id="formTaskInput__groupCardTitle"
                class="formTaskInput__groupCardTitle"
                label="Card Title"
                label-for="formTaskInput__cardTitle"
            >
                <b-form-input
                    id="formTaskInput__cardTitle"
                    class="formTaskInput__cardTitle"
                    v-model="propTaskListInputTitle"
                    type="text"
                    placeholder="Card title"
                >
                </b-form-input>
                
            </b-form-group>
            <!-- Title -->

            <!-- Severity -->
            <b-form-group
                id="input-group-1"
                label="Severity"
                label-for="input-1"
            >
                <b-form-select
                    id="input-1"
                    class="formTaskInput__cardSeverity"
                    v-model="formInputData.TaskListInput.Severity"
                    :options="this.taskSeverityOptions"
                >
                </b-form-select>
                
            </b-form-group>
            <!-- Severity -->

            <!-- Details -->
            <b-form-group
                id="input-group-1"
                label="Task Details"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardDetails"
                    v-model="formInputData.TaskListInput.Details"
                    type="text"
                    placeholder="Task Details"
                >
                </b-form-input>
                
            </b-form-group>
            <!-- Details -->

            <!-- Owner Name -->
            <b-form-group
                id="input-group-1"
                label="Owner Name"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardOwnerName"
                    v-model="formInputData.TaskListInput.OwnerName"
                    type="text"
                    placeholder="Owner Name"
                >
                </b-form-input>
                
            </b-form-group>
            <!-- Owner Name -->

            <!-- Due Date -->
            <b-form-group
                id="input-group-1"
                label="Due Date"
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardDate"
                    v-model="formInputData.TaskListInput.DueDate"
                    type="date"
                    placeholder="Due Date"
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
    </div>
</template>

<script>
import {BIconPlusCircle} from 'bootstrap-vue'
export default {
    name: 'FormInput',
    data() {
        return {
            taskInput: {
                title: '',
                severity: '',
                details: '',
                ownername: '',
                duedate: ''
            }
        }
    },
    components: {
        BIconPlusCircle
    },
    props: {
        formClass: String,
        taskSeverityOptions: Array
    },
    methods: {
        closeForm(){
            this.$emit('close-form');
        },
    },
    computed: {
        propTaskInputTitle: {
            get (){
                return this.taskInput.title;
            },
            set(value){
                this.$emit('taskinput-title', value)
            }
        },
        propTaskInputSeverity: {
            get (){
                return this.taskInput.severity;
            },
            set(value){
                this.$emit('taskinput-severity', value)
            }
        },
        propTaskInputDetails: {
            get (){
                return this.taskInput.details;
            },
            set(value){
                this.$emit('taskinput-details', value)
            }
        },
        propTaskInputOwnerName: {
            get (){
                return this.taskInput.ownername;
            },
            set(value){
                this.$emit('taskinput-ownername', value)
            }
        },
        propTaskInputDueDate: {
            get (){
                return this.taskInput.duedate;
            },
            set(value){
                this.$emit('taskinput-duedate', value)
            }
        },
    }
}
</script>

<style lang="scss">
    
</style>