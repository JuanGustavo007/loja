import { createStore } from "vuex";

export default createStore({
  state: {
    camisa: {
      nome: "Camisa Branca",
      preco: 30,
    },
    jeans: {
      nome: "Jeans",
      preco: 70,
    },
    quantidade: 0,
    carrinho: [],
  },

  mutations: {
    adicionar(state) {
      state.quantidade++;
      state.carrinho.push(state.camisa);
    },
    adicionarJeans(state) {
      state.quantidade++;
      state.carrinho.push(state.jeans);
    },
  },
  getters: {},
  actions: {},
  modules: {},
});
