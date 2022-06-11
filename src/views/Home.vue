<template>
  <div>
    <Header />

    <div>
      <Contador />
    </div>
    <!-- <div class="container">
      <div
        class="container"
        v-for="(counter, $index) of counterList"
        :key="$index"
      >
        {{ counter }}
        <Contador />
      </div>
    </div> -->

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Contador from "@/components/Contador.vue";
//import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Contador,
  },
  computed: {
    //...mapState(["counterList"]),
  },
  methods: {
    //...mapActions(["addCounter"]),
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
</style>
