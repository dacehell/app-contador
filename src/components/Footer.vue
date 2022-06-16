<template>
  <footer class="footer">
    <div class="container">
      <p>Suma contadores</p>
      <div class="footer__total">{{ sumAllCounters }}</div>
    </div>
  </footer>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "Footer",
  computed: {
    ...mapState(["counters"]),
    ...mapGetters(["sumAllCounters"]),
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 90px;
  background-color: #596e68;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: flex-end;

  &__total {
    padding: 0;
    margin: 0 15px;
    border: none;
    width: 60px;
    height: 40px;
    border-radius: 5px;
    background-color: #c0ede0;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
