import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    links: [
      'http://google.com',
      'http://coursetro.com',
      'http://youtube.com',
      'http://youtube.com',
      'http://google.com'
    ],
    //           0         1         2         3         4
    Numeros: ["hola 1", "hola 2", "hola 3", "hola 4", "hola 5"]
  },
  getters: {
   contarlinks: state => {
     return state.links.length
   },
   posicion: state => {
     return state.Numeros[0]
   }
  },
  mutations: {
  },
  actions: {
  }
})
