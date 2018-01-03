export default {
  all (store) {
    return store.todos
  },
  done (store) {
    return store.todos.filter(todo => todo.done)
  },
  archived (store) {
    return store.todos.filter(todo => todo.archived)
  },
  doneAndArchived (store) {
    return store.todos.filter(todo => {
      return todo.done && todo.archived
    })
  },
  msg (store) {
    return store.msg
  }
}
