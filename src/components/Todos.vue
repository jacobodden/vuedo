<template>
  <div class="todos">
    <h1>Todos</h1>
    <p>{{ msg }}</p>
    <div class="todo-entry">
      <input placeholder="Enter todo" type="text"/>
      <button>Submit</button>
    </div>
    <div class="todo-container">
      <ul>
        <li v-for="todo in all">{{ todo.text }} is archivde</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todos',
  computed: {
    all () {
      return this.$store.getters.all
    },
    done () {
      return this.$store.getters.done
    },
    archived () {
      return this.$store.getters.archived
    },
    doneAndArchived () {
      return this.$store.getters.doneAndArchived
    },
    msg () {
      return this.$store.getters.msg
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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

