<template>
  <div>
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Carrinho</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <ul>
              <li v-for="(item, index) in carrinho" :key="index">
                Item: {{ item.nome }} - Valor: {{ item.preco }}
              </li>
            </ul>
          </div>

          <!-- <span>{{ carrinho }}</span> -->
          <p class="valor-total">Total: {{ valorTotal }}</p>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Fechar
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="ir"
              data-bs-dismiss="modal"
            >
              Finalizar compra
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ModalComponent",
  computed: {
    ...mapState(["quantidade", "carrinho"]),
    valorTotal() {
      let valorTotal = this.carrinho.reduce((acumulador, valorAtual) => {
        return (acumulador += valorAtual.preco);
      }, 0);

      return valorTotal;
    },
  },
  methods: {
    ir() {
      const documento = document.querySelector(".fade");
      documento.classList.add("opacidade");
      this.$router.push({ name: "finalizar" });
    },
  },
};
</script>

<style scoped>
.modal-content {
  background-color: #743d34;
}

h5 {
  color: white;
}
.modal-body {
  padding: 20px;
}
li {
  background-color: white;
  list-style: none;
  border-bottom: 3px solid black;
  margin-top: 5px;
  padding: 5px;
  border-radius: 5px;
}
ul {
  padding: 0;
}
.valor-total {
  padding: 5px;
  text-align: center;
  color: white;
}
.opacidade {
  opacity: 0;
}
</style>
