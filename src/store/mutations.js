export default {
  add (store, text) {
    store.todos.push({
      text: text,
      archived: false,
      done: false
    })
  }
}
