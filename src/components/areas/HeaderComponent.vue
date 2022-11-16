<template>
  <header class="site-header sticky-top py-1 bg-dark">
    <nav class="container d-flex flex-md-row justify-content-between">
      <a class="py-2 logo" href="#" aria-label="Product"> Bear </a>
      <a
        href=""
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        class="align-self-center car"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-bag"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
          /></svg
        >{{ totalItens }}</a
      >
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";
// import ModalComponent from "./ModalComponent.vue";
//data-bs-toggle="modal"
//data-bs-target="#exampleModal"
export default {
  name: "HeaderComponent",
  components: {},
  computed: {
    ...mapState(["carrinho"]),
    totalItens() {
      return this.carrinho.length;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}
.logo {
  font-family: "Cinzel", serif;
  font-size: 2rem;
}

@media screen and (max-width: 962px) {
  nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .car {
    justify-content: flex-end;
    align-items: flex-end;
  }
}
</style>
