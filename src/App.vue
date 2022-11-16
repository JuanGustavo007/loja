<template>
  <div @scroll="darOi">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.mostrar {
  opacity: 1;
}
</style>

<script>
export default {
  methods: {
    darOi() {
      console.log(window.scrollX);
    },
  },
};
</script>
