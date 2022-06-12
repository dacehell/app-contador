import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    counters: [],
  },
  getters: {},
  mutations: {
    // SET_NAME(state, nombre) {
    //   const counter = state.counters.find((c) => c.id === id);
    //   counter.nombre = nombre;
    // },
    SUM_ALL_COUNTERS(state, payload) {
      const sumAll = state.counters
        .map((counter) => counter.count)
        .reduce((prev, curr) => prev + curr, 0);
      return sumAll;
    },
    SORT_COUNTERS(state, payload) {
      state.counters.sort((a, b) => {
        if (a.count > b.count) {
          return 1;
        }
        return 0;
      });
    },
    SET_INCREMENT(state, id) {
      const counter = state.counters.find((c) => c.id === id);
      counter.count++;
    },
    SET_DECREMENT(state, id) {
      const counter = state.counters.find((c) => c.id === id);
      counter.count--;
    },
    ADD_COUNTER(state, payload) {
      const id = Math.round(Math.random() * 9999);
      const newCounter = { id, count: 0, nombre: "" };
      state.counters.length < 20
        ? state.counters.push(newCounter)
        : alert("no se puede agregar mas de 20 contadores");
    },
    DELETE_COUNTER(state, id) {
      const counterIndex = state.counters.findIndex(
        (counter) => counter.id === id
      );
      state.counters.splice(counterIndex, 1);
    },
  },
  actions: {
    // setName({ commit, state }, nombre, id) {
    //   const counter = state.counters.find((c) => c.id === id);
    //   counter.nombre = nombre;
    //   commit("SET_NAME", nombre);
    // },
    sumAllCounters({ commit }, counter) {
      commit("SUM_ALL_COUNTERS", counter);
    },
    sortCounters({ commit }, value) {
      commit("SORT_COUNTERS", value);
    },
    setIncrement({ commit, state }, id) {
      const counter = state.counters.find((c) => c.id === id);
      if (counter.count < 20) commit("SET_INCREMENT", id);
      else alert("El contador ya tiene 20 puntos");
    },
    setDecrement({ commit, state }, id) {
      const counter = state.counters.find((c) => c.id === id);
      if (counter.count > 0) commit("SET_DECREMENT", id);
      else alert("El contador ya tiene 0 puntos");
    },
    addCounter({ commit }, counter) {
      commit("ADD_COUNTER", counter);
    },
    deleteCounter({ commit }, id) {
      commit("DELETE_COUNTER", id);
    },
  },
  getters: {
    getAllCounters(state) {
      return state.counters;
    },
  },
  modules: {},
});
