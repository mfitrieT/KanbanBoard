<template>
    <div>
        <b-row class="KanbanBody">
            <b-col class="colProject">
                <b-col class="colProject__title">Kanban</b-col>
                <b-col class="colProject__projectList">
                    <b-col class="colProject__projectItem">
                        <b-icon-card-text></b-icon-card-text>
                        Project 1
                    </b-col>
                    <b-col class="colProject__projectItem colProject__projectItem--active">
                        <b-icon-card-text></b-icon-card-text>
                        Project 2
                    </b-col>
                    <b-button variant="success" class="colProject__buttonCreate">Create Project</b-button>
                </b-col>
            </b-col>
            <b-col class="colTasks" cols="10">
                <b-col class="colTasks__header">header</b-col>
                <b-col class="colTasks__taskActivity">
                    <b-row style="width: 100%" class="colTasks__taskComponent">
                        <b-col class="colTasks__taskList">1 of 3</b-col>
                        <b-col class="colTasks__inProgress">2 of 3</b-col>
                        <b-col class="colTasks__taskDone">3 of 3</b-col>
                    </b-row>
                </b-col>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BIconCardText} from 'bootstrap-vue'
export default {
    name: "HomeTask",
    components:{
        BIconCardText
    }
}
</script>

<style lang="scss">

    :root{
        --lightGreen: #2ecc71;
    }

    *{
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
    }
    
    .KanbanBody{
        margin-left: 0;
        height: 100vh;
    }

    .colProject{
        background-color: yellow;
        // border-color: var(--green);
        &__title{
            background-color: red;
            height: 10vh;
            padding: 1rem;
            font-weight: 700;
            font-size: 1.5rem;
        }
        &__projectList{
            background-color: aqua;
            height: 90vh;
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
        &__projectItem{
            background-color: goldenrod;
            // margin: 1rem 0 1rem 0;
            padding: 0.5rem;
            margin-bottom: 1rem;
            color: #000;
            background-color: #fff;
            border: 1px solid var(--green);
            border-radius: 0.5rem;
            font-weight: 600;
        }
        &__projectItem--active{
            color: #fff;
            background-color: var(--lightGreen);
        }
        &__buttonCreate{
            margin-top: 1rem;
        }
    }

    .colTasks{
        background-color: greenyellow;

        &__header{
            background-color: azure;
            height: 10vh;
            padding: 1rem;
            display: flex;
            font-size: 1.5rem;
        }
        &__taskActivity{
            background-color: bisque;
        }
        &__taskComponent{
            height: 90vh;
            margin-right: 0;
            margin-left: 0;
            gap: 1rem;
        }
        &__taskList{
            background-color: red;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        &__inProgress{
            background-color: brown;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
        &__taskDone{
            background-color: purple;
            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }
</style>