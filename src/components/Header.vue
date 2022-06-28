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
          <option value="ascendente">Ascendente</option>
          <option value="descendente">Descendente</option>
        </select>
      </form>

      <div class="header__filter">
        <label for="header__filter__list"> >= </label>
        <input class="header__filter__input" name="filter-list" type="text" />
        <button class="header__filter__button">add</button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Header",
  props: ["sortAscend", "sortDescend"],
  data() {
    return {
      selected: "",
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
    ...mapState(["counters"]),
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
      width: 40px;
      height: 40px;
      border-radius: 5px;
    }
    &__button {
      margin-left: 30px;
      width: 50px;
      height: 50px;
      border-radius: 5px;
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
