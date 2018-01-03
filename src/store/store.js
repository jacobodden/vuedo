import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters.js'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todos: [
      {
        text: 'Test 1',
        archived: false,
        done: false
      },
      {
        text: 'Test 2',
        archived: false,
        done: true
      },
      {
        text: 'Test 3',
        archived: true,
        done: false
      },
      {
        text: 'Test 4',
        archived: true,
        done: true
      }
    ],
    msg: 'testing'
  },
  getters
})
