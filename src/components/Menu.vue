<template>
  <div class="menu">
    <h1>{{ msg }}</h1>
    <label for="Eventname">Nom de l'évènement :</label>
    &nbsp;&nbsp;
    <input type="text"
           id="eventName"
           class="form-control"
           v-model="eventName">
    <br />
    <br />
    <button id="création" class="btn btn-primary" type="submit" @click='onclick(eventName)'>Créer</button>
  </div>
</template>

<script>
export default {
  name: 'menu',
  data: function() {
      return {
            eventName: '',
            msg: "Création d'évènement"
      }
  },
  props: {
      onclick: { type:Function }
  },
  methods: {

  }
}
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