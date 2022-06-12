<template>
  <div>
    <Header />

    <button class="new__counter" @click="getModal" id="myBtn">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="inputCounter">
          <input type="text" v-model="nombre" />
          <div class="btn">
            <button class="btn__counter" @click="addCounter">Confirmar</button>
            <button class="btn__counter">Cancelar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="container" v-for="(counter, index) in counters" :key="index">
        <Contador
          :counter="counter.id"
          :count="counter.count"
          :name="counter.nombre"
        />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Contador from "@/components/Contador.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Contador,
  },
  data() {
    return {
      nombre: "",
    };
  },
  computed: {
    ...mapState(["counters"]),
  },
  methods: {
    ...mapActions(["addCounter"]),
    getModal() {
      // Get the modal
      const modal = document.getElementById("myModal");

      // Get the button that opens the modal
      const btn = document.getElementById("myBtn");

      // Get the <span> element that closes the modal
      const span = document.getElementsByClassName("close")[0];

      // When the user clicks the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      // When the user clicks on <span> (x), close the modal
      span.onclick = function () {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  margin: 70px 0;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 16rem;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 22rem), 1fr));
  justify-items: center;
  align-items: center;
}

.inputCounter {
  border-radius: 8px;

  input {
    width: 300px;
    height: 40%;
    border-radius: 8px;
  }
  width: 80%;
  height: 100px;
  background-color: blue;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.btn {
  display: flex;
  align-items: center;
  &__counter {
    padding: 15px 30px;
    margin: 0 5px;
    border-radius: 8px;
  }
}

/* modal*/
/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
.new__counter {
  position: fixed;
  right: 50px;
  top: 122px;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50%;
  font-size: 3rem;
  background-color: #72fd82;
  color: white;
  -webkit-box-shadow: 0px 0px 14px 3px rgb(78 95 98 / 56%);
  box-shadow: 0px 0px 14px 3px rgb(78 95 98 / 56%);
}
</style>
