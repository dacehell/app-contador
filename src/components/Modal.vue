<template>
  <div>
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="inputCounter">
          <input type="text" v-model="nameCounters" />
          <div class="btn">
            <button class="btn__counter" @click="addCounter">Confirmar</button>
            <button class="btn__counter">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Modal",
  props: ["nameCounters"],
  data() {
    return {
      nameCounter: "",
    };
  },
  methods: {
    ...mapActions(["addCounter"]),
    show() {
      this.$modal.show("my-first-modal");
    },
    hide() {
      this.$modal.hide("my-first-modal");
    },
  },
  //   computed: {
  //     setNameCounter() {
  //       this.nameCounter = this.nameCounters;
  //       return this.nameCounter;
  //     },
  //   },
  //   created() {
  //     this.setNameCounter;
  //   },
};
</script>

<style></style>
