<template>
  <div class="Menu">
    <h1>{{ msg }}</h1>
    <label for="Eventname">Nom de l'évènement :</label>
    &nbsp;&nbsp;
    <input type="text" id="eventName" class="form-control" v-model="eventName">
    <br>
    <br>
    <button id="création" class="btn btn-primary" type="submit" @click="create(eventName)">Créer</button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data: function() {
    return {
      eventName: "",
      msg: "Création d'évènement"
    };
  },

  methods: {
    create(eventName) {
      const axios = require("axios");
      console.log(this);
      this.event = eventName;
      axios
        .post("http://localhost:8080/testjpa/rest/polls", {
          name: eventName
        })
        .then(response => {
          this.$router.push({
            name: "event",
            params: { id: response.data.id }
          });
          this.id = response.data.id;
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>