<template>
  <div class="event">
    <h1> Évènement : {{ eventName }} </h1>
    <!-- <h2> {{this.id}} </h2> -->
    <h3> Ajouter des participants </h3>
    <br />
    <label for="participantname">Nom :</label>
    &nbsp;&nbsp;
    <input type="text"
           id="participantName"
           class="form-control"
           v-model="participantName">
    <br />
    <br />
    <button id="ajout" class="btn btn-primary" type="submit" @click='onclick(participantName)'>Ajouter</button>
    <ul> 
        <li v-for= "item in lParticipantName" v-bind:key= "item">
            {{ item }}
        </li>
    </ul>
  </div>
</template>

<script>
const axios = require("axios")

export default {
  name: 'event',
  data: function() {
      return {
            lParticipantName: [],
            eventName: '',
            participantName: ''
      }
  },
  props: {
      id : { type:Number },
  },
  methods: {
      onclick: function(participantName) {
          axios.post(`http://localhost:8080/testjpa/rest/polls/add/${this.$route.params.id}`, {
          name: participantName
        })
        .then( response => {
          this.participantName = ""
          axios.get(`http://localhost:8080/testjpa/rest/polls/${this.$route.params.id}`)
            .then((response) => {
            this.eventName = response.data.name
         
            this.lParticipantName = response.data.lUsers.map( u => u.name)

            })
            .catch(function (error) {
            console.log(error);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
      }
  },
  mounted: function() {
      axios.get(`http://localhost:8080/testjpa/rest/polls/${this.$route.params.id}`)
        .then((response) => {
          this.eventName = response.data.name
         
            this.lParticipantName = response.data.lUsers.map( u => u.name)

        })
        .catch(function (error) {
          console.log(error);
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
