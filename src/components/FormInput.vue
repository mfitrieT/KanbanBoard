<template>
    <div>
        <b-form :class="formClass" @submit.prevent="submitTaskData()">
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
                    v-model="taskInput.title"
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
            >
                <b-form-select
                    id="input-1"
                    class="formTaskInput__cardSeverity"
                    v-model="taskInput.severity"
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
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardDetails"
                    v-model="taskInput.details"
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
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardOwnerName"
                    v-model="taskInput.ownername"
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
            >
                <b-form-input
                    id="input-1"
                    class="formTaskInput__cardDate"
                    v-model="taskInput.duedate"
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
    // props: {
    //     formClass: String,
    //     taskSeverityOptions: Array
    // },
    props: ['formClass','taskSeverityOptions'],
    methods: {
        closeForm(){
            this.$emit('close-form');
        },
        submitTaskData(){
            this.$emit('form-data', this.taskInput);
        }
    },
}
</script>

<style lang="scss">
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
</style>