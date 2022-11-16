import { createRouter, createWebHistory } from "vue-router";
//Areas do site
import HomeComponent from "@/components/HomeComponent.vue";
import HeaderComponent from "@/components/areas/HeaderComponent.vue";
import finalizarCompra from "@/components/finalizarCompra.vue";

//Roupas
import Camisa1View from "@/views/Camisa1View.vue";
import Camisa2View from "@/views/Camisa2View.vue";
import Jeans1View from "@/views/Jeans1View.vue";
import Jeans2View from "@/views/Jeans2View.vue";
import ModalComponent from "@/components/areas/ModalComponent.vue";

const routes = [
  {
    path: "/",
    component: HomeComponent,
    children: [
      {
        path: "",
        name: "camisa",
        components: {
          header: HeaderComponent,
          camisa1: Camisa1View,
          camisa2: Camisa2View,
          jeans1: Jeans1View,
          jeans2: Jeans2View,
          modal: ModalComponent,
        },
      },
    ],
  },
  {
    path: "/finalizar",
    name: "finalizar",
    component: finalizarCompra,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
