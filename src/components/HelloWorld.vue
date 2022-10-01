<template>
  <div>
    <b-row>
        <b-col></b-col>
        <b-col cols="8">
          <b-alert show>Default Alert</b-alert>
          </b-col>
        <b-col></b-col>
    </b-row>
    
    <b-row>
      <b-alert variant="success" show>Success Alert</b-alert>

      <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
        Dismissible Alert!  
      </b-alert>
    </b-row>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="warning"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>

<style lang="scss">
.row{
  width: 100vw;
}
  // .col-8{
  //   padding: 0;
  // }

  // .col{
  //   padding: 0;
  // }
</style>