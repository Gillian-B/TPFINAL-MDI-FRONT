<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Menu v-if="state === 0" :onclick="create"></Menu>
    <Event v-if="state === 1" :id="id"></Event>
  </div>
</template>

<script>
const axios = require("axios")

import Menu from './components/Menu.vue'
import Event from './components/Event.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Event
  },
  data: function() {
    return {
      state: 0,
      event: "",
      participant : "",
      id :0
    }
  },
  methods: {
    create(eventName) {
      console.log(this)
      this.event = eventName
      axios.post('http://localhost:8080/testjpa/rest/polls', {
          name: eventName
        })
        .then( response => {
          this.id = response.data.id

          this.state = 1
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
