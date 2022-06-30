<template>
  <div>
    <Header :sortAscend="setSortAscending" :sortDescend="setSortDescending" />
    <!-- <button @click="setSortLowest">lowest</button> -->
    <button class="new__counter" id="show-modal" @click="showModal = true">
      <font-awesome-icon icon="fa-solid fa-plus" />
    </button>
    <!-- <div id="myModal" class="modal" v-if="showModal" @close="showModal = false">
      Modal content
      <div class="modal-content">
        <span class="close">&times;</span>
        <div class="inputCounter">
          <input type="text" v-model="counters.nombre" />
          <div class="btn">
            <button class="btn__counter" @click="addCounter">Confirmar</button>
            <button class="btn__counter">Cancelar</button>
          </div>
        </div>
      </div>
    </div> -->
    <transition name="modal" v-if="showModal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-body">
              <h2>Agregar nuevo contador</h2>
              <slot name="body">
                <div class="inputCounter">
                  <input
                    type="text"
                    v-model="counters.nombre"
                    placeholder="Ingrese nombre"
                  />
                  <div class="btn">
                    <button class="btn__counter" @click="addCounter">
                      Confirmar
                    </button>
                    <button class="btn__counter" @click="showModal = false">
                      Cancelar
                    </button>
                  </div>
                </div>
              </slot>
            </div>
          </div>
        </div>
      </div>
    </transition>
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
//import Modal from "@/components/Modal.vue";
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
      nombre: [],
      sortCounterUp: [],
      showModal: false,
    };
  },
  computed: {
    ...mapState(["counters"]),
  },
  methods: {
    ...mapActions(["addCounter", "sortAscending", "sortDescending"]),
    setSortAscending() {
      this.sortAscending(this.counters);
    },
    setSortDescending() {
      this.sortDescending(this.counters);
    },
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
  margin: 70px 20px;
  display: grid;
  gap: 1rem;
  grid-auto-rows: 12rem;
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
  width: 100%;
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 80%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 10px 0;
  h2 {
    text-align: center;
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.new__counter {
  position: fixed;
  right: 50px;
  top: 107px;
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
