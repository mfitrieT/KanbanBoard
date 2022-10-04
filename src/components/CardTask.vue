<template lang="">
    <div>
        <b-card
            title="Card title"
            class="colTasks__taskCard"
        >
        <span class="colTasks__cardSeverity colTasks__cardSeverity--moderate">Moderate Level</span>
            <b-card-text class="colTasks__cardDescription">
                <!-- Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui recusandae quisquam iure fugiat voluptatum   -->
                {{content}}
            </b-card-text>
            <b-card-text class="small text-muted colTasks__cardOwner">John</b-card-text>
            <b-card-text class="small text-muted colTasks__cardDate">
                <b-icon-clock class="colTasks__iconCardDate"></b-icon-clock>
                Due Aug 15 at 12 pm
            </b-card-text>
            <b-icon-trash title="Delete Card" class="colTasks__iconDeleteCard"></b-icon-trash>
        </b-card>
    </div>
</template>

<script>
import {BIconTrash, BIconClock} from 'bootstrap-vue'
export default {
    name: 'CardTask',
    components: {
        BIconTrash,
        BIconClock
    },
    props: {
        id: Number,
        title: String,
        severity: String,
        content: {
            type: String,
            default(){
                return 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui recusandae quisquam iure fugiat voluptatum'
            }
        },
        OwnerName: String,
        DueDate: String
    }
    // props: [
    //     'id',
    //     'title',
    //     'severity',
    //     'content',
    //     'OwnerName',
    //     'DueDate',
    // ]
}
</script>

<style lang="scss">

    .colTasks{

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
                // background-color: var(--doubleLightOrange);
                // color: var(--lightOrange);
                font-weight: 600;
                border-radius: 0.5rem;
                padding: 0.5rem;
                font-size: 0.7rem;
            }

            .colTasks__cardSeverity--low{
                background-color: var(--doubleLightGreen);
                color: var(--lightGreen);
            }

            .colTasks__cardSeverity--moderate{
                background-color: var(--doubleLightOrange);
                color: var(--lightOrange);
            }

            .colTasks__cardSeverity--high{
                background-color: var(--doubleLightRed);
                color: var(--lightRed);
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