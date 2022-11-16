<template>
  <div>
    <div class="segurar">
      <div class="infos">
        <img src="@/assets/camisas/camisa1.jpg" alt="" class="img-fluid" />
        <div class="valores">
          <div>
            <p class="descricao">{{ camisa.nome }}</p>
          </div>
          <div class="d-flex justify-content-between p-2">
            <p class="valor">Preço: {{ camisa.preco }}</p>
            <p class="comprar" @click="handleClick">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                class="bi bi-plus-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                />
                <path
                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.segurar {
  display: flex;
  justify-content: center;
}
img {
  width: 100%;
  max-height: 700px;
  height: 700px;
  border-bottom: 3px solid black;
}
.infos {
  border: 3px solid black;
  width: 100%;
}
.descricao {
  background-color: #743d34;
  color: white;
  font-size: 1.5rem;
  border-bottom: 3px solid black;
  padding: 5px;
}
.comprar {
  cursor: pointer;
}
.valor {
  font-size: 20px;
  border: 1px solid black;
  padding: 5px;
  background-color: #743d34;
  color: white;
}
@media screen and (max-width: 768px) {
  img {
    height: 400px;
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  name: "Camisa1View",
  computed: {
    ...mapState(["camisa"]),
    nome() {
      return "juan";
    },
  },
  methods: {
    handleClick() {
      this.$store.commit("adicionar");
    },
  },
};
</script>
