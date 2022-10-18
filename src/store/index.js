import Vue from 'vue'
import Vuex from 'vuex'
import db from '../assets/script/db';

Vue.use(Vuex)

export default new Vuex.Store({
  // store data to app
  state: {
    ProjectListData: [],
  },
  getters: {
  },
  // mutation is the only way to change the data in state, it is by triggering or commiting
  // can't trigger async code in mutation
  // triggering mutations is called 'commit'
  mutations: {
    pushInitProjectListArray(state, projectListArrayDB){
      projectListArrayDB.forEach(el=>{
        state.ProjectListData.push(el);
      });
    },
    addProjectListData(state, dataFromDB){
      state.ProjectListData.push(dataFromDB);
    },
    deleteProjectData(state, projectID){
      const projectData = state.ProjectListData.find((el)=>{
        return el.id === projectID
      });

      state.ProjectListData.splice(state.ProjectListData.indexOf(projectData), 1);

    }
  },
  // can do async in actions
  // if want to change the data in state, need to commit the mutations
  // triggering actions is called 'dispatching'
  actions: {
    async ProjectListInit({commit}){
      const projectListData = await db.Project.toArray();
      commit('pushInitProjectListArray', projectListData);
    },
    async addProjectList({commit}, valueFromDialog){
        const projectId = await db.Project.add({
          projectName: valueFromDialog.value
        });
        const dataFromDB = await db.Project.get(projectId);

        commit('addProjectListData', dataFromDB);
    },
    async deleteProject({commit}, projectID){
      await db.Project.delete(projectID);
      commit('deleteProjectData', projectID);
    }
  },
  modules: {
  }
})
