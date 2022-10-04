<template>
    <div>
        <b-row class="KanbanBody">
            <b-col class="colProject">
                <b-col class="colProject__title">
                    Kanban
                    <b-icon-list-task class="colProject__iconTitle"></b-icon-list-task>
                </b-col>
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
                <b-col class="colTasks__header">Project 1</b-col>
                <b-col class="colTasks__taskActivity">
                    <b-row style="width: 100%" class="colTasks__taskComponent">
                        <b-col class="colTasks__taskList">
                            <b-col class="colTasks__titleTaskList">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask"></b-icon-plus-square>
                                <span>Tasks List</span>
                            </b-col>
                            <b-car-group columns class="colTasks__listTaskCard">
                                <b-card
                                    title="Card title"
                                    class="colTasks__taskCard"
                                >
                                <span class="colTasks__cardSeverity">Moderate Level</span>
                                    <b-card-text class="colTasks__cardDescription">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui recusandae quisquam iure fugiat voluptatum  
                                    </b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardOwner">John</b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardDate">
                                        <b-icon-clock class="colTasks__iconCardDate"></b-icon-clock>
                                        Due Aug 15 at 12 pm
                                    </b-card-text>
                                    <b-icon-trash title="Delete Card" class="colTasks__iconDeleteCard"></b-icon-trash>
                                </b-card>
                            </b-car-group>
                        </b-col>
                        <b-col class="colTasks__inProgress">
                            <b-col class="colTasks__titleInProgress">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask"></b-icon-plus-square>
                                <span>In Progress</span>
                            </b-col>
                            <b-car-group columns class="colTasks__listTaskCard">
                                <b-card
                                    title="Card title"
                                    class="colTasks__taskCard"
                                >
                                <span class="colTasks__cardSeverity">Moderate Level</span>
                                    <b-card-text class="colTasks__cardDescription">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui recusandae quisquam iure fugiat voluptatum  
                                    </b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardOwner">John</b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardDate">Due Aug 15 at 12 pm</b-card-text>
                                    <b-icon-trash title="Delete Card" class="colTasks__iconDeleteCard"></b-icon-trash>
                                </b-card>
                            </b-car-group>
                        </b-col>
                        <b-col class="colTasks__taskDone">
                            <b-col class="colTasks__titleTaskDone">
                                <b-icon-plus-square title="Add Task" class="colTasks__btnCreateTask"></b-icon-plus-square>
                                <span>Done</span>
                            </b-col>
                            <b-car-group columns class="colTasks__listTaskCard">
                                <b-card
                                    title="Card title"
                                    class="colTasks__taskCard"
                                >
                                <span class="colTasks__cardSeverity">Moderate Level</span>
                                    <b-card-text class="colTasks__cardDescription">
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui recusandae quisquam iure fugiat voluptatum  
                                    </b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardOwner">John</b-card-text>
                                    <b-card-text class="small text-muted colTasks__cardDate">Due Aug 15 at 12 pm</b-card-text>
                                    <b-icon-trash title="Delete Card" class="colTasks__iconDeleteCard"></b-icon-trash>
                                </b-card>
                            </b-car-group>
                        </b-col>
                    </b-row>
                </b-col>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import {BIconListTask, BIconCardText, BIconPlusSquare, BIconTrash, BIconClock} from 'bootstrap-vue'
export default {
    name: "HomeTask",
    components:{
        BIconListTask,
        BIconCardText,
        BIconPlusSquare,
        BIconTrash,
        BIconClock
    }
}
</script>

<style lang="scss">

    :root{
        --softBorderColor: #d5d5d5;
        --lightDark: #eee;
        --lightGreen: #41d262;
        --doubleLightGreen: #e6f9ea;
        --lightRed: #e74c3c;
        --doubleLightRed: #fbe5e3;
        --lightOrange: #f39c12;
        --doubleLightOrange: #fef4e4;

    }

    *{
        font-family: 'Lato', sans-serif;
        font-size: 1rem;
    }
    
    .KanbanBody{
        margin-left: 0;
        height: 100vh;
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

        &__projectItem{
            // background-color: goldenrod;
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

        &__taskList{}
        &__inProgress{}
        &__taskDone{}

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

        &__taskCard{

            border: 1px solid var(--green);

            &::before{
                content:'';
                position: absolute;
                background-color: var(--lightOrange);
                width: 4px;
                height: 90%;
                bottom: 0;
                left:-2px;
            }

            //-------- Card title --------//
            h4{
                display: inline-block;
                // background-color: green;
                width: 60%;
                text-align: start;
            }
            //-------- Card title --------//

            .colTasks__cardSeverity{
                margin-left: 2rem;
                background-color: var(--doubleLightOrange);
                color: var(--lightOrange);
                font-weight: 600;
                border-radius: 0.5rem;
                padding: 0.5rem;
                font-size: 0.7rem;
            }

            .colTasks__cardDescription{
                max-height: 4rem;
                text-align: start;
            }

            .colTasks__cardOwner{
                // background-color: #41d262;
                display: inline-block;
                text-align: start;
            }

            .colTasks__iconCardDate{
                color: var(--lightGreen);
                margin-right: 0.5rem;
            }

            .colTasks__cardDate{
                // background-color: red;
                display: inline-block;
                width: 70%;
            }

            .colTasks__iconDeleteCard{
                color: var(--lightRed);
                width: 1.5rem;
                height: 1.5rem;
                margin-left: 1rem;
                cursor: pointer;
            }
        } 


    }
</style>