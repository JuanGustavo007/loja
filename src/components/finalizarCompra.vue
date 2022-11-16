<template>
  <div class="finalizar mt-4">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="row g-5">
            <div class="col">
              <h4 class="mb-3">Informações</h4>
              <form class="needs-validation" novalidate="">
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">Nome</label>
                    <input
                      type="text"
                      class="form-control"
                      id="firstName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Sobrenome</label>
                    <input
                      type="text"
                      class="form-control"
                      id="lastName"
                      placeholder=""
                      value=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Valid last name is required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">Email </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      placeholder="you@example.com"
                      required
                    />
                    <div class="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">Endereço</label>
                    <input
                      type="text"
                      class="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required=""
                    />
                    <div class="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>

                  <div class="col-md-5">
                    <label for="country" class="form-label">País</label>
                    <select class="form-select" id="country" required="">
                      <option value="">Selecione...</option>
                      <option>United States</option>
                    </select>
                    <div class="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>

                  <div class="col-md-4">
                    <label for="state" class="form-label">Estado</label>
                    <select class="form-select" id="state" required="">
                      <option value="">Selecione...</option>
                      <option>California</option>
                    </select>
                    <div class="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="zip" class="form-label">CEP</label>
                    <input
                      type="text"
                      class="form-control"
                      id="zip"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Zip code required.</div>
                  </div>
                </div>

                <hr class="my-4" />

                <h4 class="mb-3">Pagamento</h4>

                <div class="my-3">
                  <div class="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      checked=""
                      required=""
                    />
                    <label class="form-check-label" for="credit"
                      >Cartão de crédito</label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required=""
                    />
                    <label class="form-check-label" for="debit">Débito</label>
                  </div>
                  <div class="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      class="form-check-input"
                      required=""
                    />
                    <label class="form-check-label" for="paypal">PayPal</label>
                  </div>
                </div>

                <div class="row gy-3">
                  <div class="col-md-6">
                    <label for="cc-name" class="form-label"
                      >Nome no cartão</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cc-name"
                      placeholder=""
                      required=""
                    />

                    <div class="invalid-feedback">Name on card is required</div>
                  </div>

                  <div class="col-md-6">
                    <label for="cc-number" class="form-label"
                      >Número do cartão</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cc-number"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-expiration" class="form-label"
                      >Expira em...</label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="cc-expiration"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Expiration date required</div>
                  </div>

                  <div class="col-md-3">
                    <label for="cc-cvv" class="form-label">CVV</label>
                    <input
                      type="text"
                      class="form-control"
                      id="cc-cvv"
                      placeholder=""
                      required=""
                    />
                    <div class="invalid-feedback">Security code required</div>
                  </div>
                </div>

                <hr class="my-4" />

                <button class="w-100 btn btn-primary btn-lg" type="submit">
                  Continuar compra
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col coluna-dados">
          <div class="order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class="text-primary">Suas compras...</span>
              <span class="badge bg-primary rounded-pill">{{
                carrinho.length
              }}</span>
            </h4>
            <ul class="list-group mb-3">
              <li
                class="list-group-item d-flex justify-content-between lh-sm"
                v-for="(item, index) in carrinho"
                :key="index"
              >
                <div>
                  <h6 class="my-0">{{ item.nome }}</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">{{ item.preco }}</span>
              </li>
              <!-- <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Second product</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$8</span>
              </li>
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <div>
                  <h6 class="my-0">Third item</h6>
                  <small class="text-muted">Brief description</small>
                </div>
                <span class="text-muted">$5</span>
              </li>
              <li
                class="list-group-item d-flex justify-content-between bg-light"
              >
                <div class="text-success">
                  <h6 class="my-0">Promo code</h6>
                  <small>EXAMPLECODE</small>
                </div>
                <span class="text-success">−$5</span>
              </li>
              <li class="list-group-item d-flex justify-content-between">
                <span>Total (USD)</span>
                <strong>$20</strong>
              </li> -->
            </ul>

            <form class="card p-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Promo code"
                />
                <button type="submit" class="btn btn-secondary">Redeem</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "finalizarCompra",
  data() {
    return {};
  },
  computed: {
    ...mapState(["carrinho"]),
  },
};
</script>

<style scoped>
.finalizar {
  opacity: 1 !important;
}
.coluna-dados {
  background-color: aliceblue;
  border-radius: 10px;
  padding: 20px;
}
li {
  list-style: none;
}
ul {
  gap: 10px;
}

@media screen and (max-width: 968px) {
  .row {
    display: flex;
    flex-direction: column;
  }
}
</style>
