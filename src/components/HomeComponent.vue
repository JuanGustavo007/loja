<template>
  <div>
    <router-view name="header"></router-view>
    <router-view name="modal"></router-view>
    <div
      class="position-relative overflow-hidden mb-3 text-center bg-light p-0"
    >
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <img src="@/assets/bear.png" alt="" class="img-fluid urso-img" />
      </div>
    </div>
    <div class="container-fluid bg-light pt-5 container-produtos">
      <div class="produtos container">
        <h1 class="t">T-shirts</h1>
        <div class="row">
          <div class="col">
            <router-view name="camisa1"></router-view>
          </div>
          <div class="col">
            <router-view name="camisa2"></router-view>
          </div>
        </div>
        <h1 class="t mt-5">Jeans</h1>
        <div class="row">
          <div class="col">
            <router-view name="jeans1"></router-view>
          </div>
          <div class="col">
            <router-view name="jeans2"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
};
</script>

<style scoped>
.urso-img {
  width: 400px;
  max-width: 100%;
}
h1 {
  background-color: #743d34;
  border-radius: 5px;
  text-align: center;
  color: white;
  border: 3px solid black;
  margin-bottom: 20px;
}
.t {
  font-family: "Cinzel", serif;
}

@media screen and (max-width: 962px) {
  .row {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
