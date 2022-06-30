<template>
  <div class="container">
    <div class="card">
      <p class="card__title">{{ name }}</p>
      <div class="card__body">
        <button
          @click="setIncrement(counter)"
          class="card__body__btn__increase"
        >
          <font-awesome-icon icon="fa-solid fa-plus " />
        </button>
        <div class="card__body__box">{{ count }}</div>
        <button
          @click="setDecrement(counter)"
          class="card__body__btn__decrease"
        >
          <font-awesome-icon icon="fa-solid fa-minus" />
        </button>
        <button @click="deleteCounter(counter)" class="card__body__btn__delete">
          <font-awesome-icon icon="fa-solid fa-trash-can" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Contador",
  props: ["counter", "count", "name"],
  data() {
    return {};
  },
  computed: {
    ...mapState(["counters"]),
    // ...mapGetters(["getAllCounters"]),
  },
  methods: {
    ...mapActions([
      "deleteCounter",
      "addCounter",
      "setIncrement",
      "setDecrement",
      "setName",
    ]),
  },
};
</script>

<style lang="scss" scoped>
// .container {
//   display: grid;
//   gap: 1rem;
//   grid-auto-rows: 16rem;
//   grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
//   justify-items: center;
//   align-items: center;
// }
.card {
  margin: 10px;
  width: 300px;
  height: 150px;
  background-color: #66e3df;
  border-radius: 10px;
  &__title {
    font-size: 2rem;
    margin: 0;
    text-align: center;
    background-color: #93b5ab;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  &__body {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    &__box {
      width: 70px;
      height: 50px;
      border: none;
      font-size: 2.7rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__btn__increase,
    &__btn__decrease {
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 10px;
      font-size: 2rem;
      background-color: #c0ede0;
      -webkit-box-shadow: 0px 0px 12px 3px rgba(87, 87, 87, 0.16);
      box-shadow: 0px 0px 12px 3px rgba(87, 87, 87, 0.16);
    }
    &__btn__delete {
      font-size: 2rem;
      border: none;
      background-color: transparent;
    }
  }
  .fa-trash-can {
    color: rgb(255 0 0 / 88%);
    -webkit-box-shadow: 0px 0px 12px 3px rgba(87, 87, 87, 0.16);
    box-shadow: 0px 0px 12px 3px rgba(87, 87, 87, 0.16);
  }
}
</style>
