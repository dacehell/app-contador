import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //counter: 0,
    counters: [
      {
        name: "",
        id: "",
      },
    ],
  },
  getters: {},
  mutations: {
    // SET_INCREMENT(state) {
    //   state.counters < 20 ? state.counters++ : state.counters;
    // },
    // SET_DECREMENT(state) {
    //   state.counters > 0 ? state.counters-- : state.counters;
    // },
    ADD_COUNTER(state, payload) {
      state.counters.length < 20
        ? state.counters.push(payload)
        : alert("no se puede agregar mas");
    },
    DELETE_COUNTER(state, payload) {
      state.counters = state.counters.filter(
        (counter) => counter.index !== payload.index
      );
    },
  },
  actions: {
    // setIncrement({ commit }, counter) {
    //   commit("SET_INCREMENT", counter);
    // },
    // setDecrement({ commit }, counter) {
    //   commit("SET_DECREMENT", counter);
    // },
    addCounter({ commit }, counter) {
      commit("ADD_COUNTER", counter);
    },
    deleteCounter({ commit }, counter) {
      commit("DELETE_COUNTER", counter);
    },
  },
  getters: {
    getAllCounters(state) {
      return state.counters;
    },
  },
  modules: {},
});
