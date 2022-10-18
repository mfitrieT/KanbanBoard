<template>
    <div>
        <b-col :class="btnIsActive()" @click="onClick($event)">
            <b-icon-card-text></b-icon-card-text>
            <!-- Project 1 -->
            {{projectName}}
        </b-col>
    </div>
</template>

<script>
import {BIconCardText} from 'bootstrap-vue'
export default {
    name: 'ButtonProject',
    data() {
        return {
            btnActive: this.isActive
        }
    },
    components: {
        BIconCardText
    },
    props: {
        isActive: {
            type: Boolean,
            default(){
                return false
            }
        },
        projectID: {
            type: Number
        },
        projectName: {
            type: String,
            required: true
        },
        projectIndex: {
            type: Number
        },
    },
    methods: {
        btnIsActive(){
            return this.btnActive ? "colProject__projectItem colProject__projectItem--active" : "colProject__projectItem"; 
        },
        onClick(event){
            this.$emit('btn-click', event, this.projectIndex, this.projectID);
        }
    },
}
</script>

<style lang="scss">

    .colProject{
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
            cursor: pointer;
        }

        &__projectItem--active{
            color: #fff;
            background-color: var(--lightGreen);
        }

    }

</style>