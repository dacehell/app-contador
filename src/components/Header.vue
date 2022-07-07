<template>
  <header class="header">
    <div class="container">
      <form>
        <select
          v-model="selected"
          class="header__select"
          name="sort"
          @change="setSortLow()"
        >
          <option value="" selected>Order by</option>
          <option value="ascendente">Ascendent</option>
          <option value="descendente">Descendent</option>
        </select>
      </form>

      <div class="header__filter">
        <form @submit.prevent="setRangeMinMax">
          <input
            class="header__filter__input"
            name="filter-list"
            type="text"
            placeholder="$Min"
            v-model="setMin"
            required
            :min="min"
          />

          <input
            class="header__filter__input"
            name="filter-list"
            type="text"
            placeholder="$Max"
            v-model="setMax"
            required
            :max="max"
          />
          <button class="header__filter__button">Go</button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  props: ["sortAscend", "sortDescend", "rangeMinMax"],
  data() {
    return {
      selected: "",
      setMin: "",
      setMax: "",
    };
  },
  methods: {
    setSortLow() {
      if (this.selected === "ascendente") {
        this.sortAscend();
      } else if (this.selected === "descendente") {
        this.sortDescend();
      } else {
        this.selected;
      }
      // this.selected == "ascendente" ? this.sortLow() : this.sortDescend();
    },
  },

  computed: {
    ...mapState(["counters", "min", "max"]),
    setRangeMinMax: {
      get() {
        let hi = this.rangeMinMax(this.setMin, this.setMax);
        return console.log(hi);
      },
      set() {
        this.min = this.setMin;
        this.max = this.setMax;
      },
    },
  },
};
</script>

<style scoped lang="scss">
.header {
  &__filter {
    color: white;
    &__input {
      padding: 0;
      border: none;
      width: 46px;
      height: 46px;
      border-radius: 5px;
      margin: 0 10px;
      font-size: 1rem;
    }
    &__button {
      margin-left: 10px;
      width: 46px;
      height: 46px;
      font-size: 1rem;
      border: none;
      border-radius: 50%;
    }
  }
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
  background-color: #596e68;
  &__select {
    width: 150px;
    height: 40px;
    border-radius: 5px;
  }
}
.container {
  width: 100%;
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
}
</style>
