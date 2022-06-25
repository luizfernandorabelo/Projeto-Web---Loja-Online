<template>
  <div id="finishpurchase-container">
    <PageLocation :location="location"/>
    <h2>Finalizar compra</h2>
    <div id="main-container">
      <div id="summary-container">
        <div class="top-container">
          <span>Forma de pagamento</span>
        </div>
        <div class="middle-container">
          <div>
            <div id="credit-card">
              <img src="../assets/credit-cart.png" alt="Cartão de Crédito">
              <p>Cartão {{creditCart}}</p>
            </div>
            <div id="bottom-middle-container">
              <input id="cvv" type="number" placeholder="CVV" min="000" max="999"/>
              <select id="installments">
                <option v-for="i in 12" :key="i" value="i">{{i}}x de R$ {{(total / i).toFixed(2)}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="horizontal-sep"></div>
        <div class="bottom-container">
          <div id="confirmation-message">
            <span>Confirme o endereço</span>
          </div>
          <div id="address">
            <img src="../assets/location.png" alt="Localização">
            <p>Endereço de entrega</p>
          </div>
          <div id="delivery-time">
            <span>Entrega em {{deliveryDays}} dias</span>
          </div>
          <router-link to="/">
            <button id="finish-purchase-btn">Finalizar compra</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>  
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
export default {
  components: {
    PageLocation
  },
  name: 'FinishPurchase',
  data() {
    return {
      location: [ 
        {name: 'Home', id: 0, path: '/'},
        {name: 'Carrinho', id: 1, path: '/cart'},
        {name: 'Finalizar compra', id: 2, path: '/finishPurchase'},
      ],
      total: 1000,
      creditCart: '',
      deliveryDays: 0,
    }
  },
  methods: {
  },
}
</script>


<style scoped>
#main-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
}

h2 {
  text-align: center;
  margin: 20px 0;
}

#summary-container {
  font-size: 1.1rem;
  padding: 15px;
  height: calc(100% - 30px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
}

#credit-card {
  padding: 5px;
  margin: 15px 0 5px;
  width: 100%;
  height: 40px;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
}

#credit-card img {
  height: 30px;
  width: 45px;
}

#bottom-middle-container {
  display: flex;
  justify-content: space-evenly;
}

#cvv {
  padding: 5px;
  margin: 5px;
  width: 40px;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
}

#installments {
  padding: 5px;
  margin: 5px;
  width: 240px;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
}

#confirmation-message {
  margin: 10px 0px 15px;
  text-align: center;
}

#address {
  width: 90%;
  padding: 5px;
  margin: 5px auto;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

#address img {
  width: 30px;
  height: 35px;
}

#delivery-time {
  font-size: 0.7rem;
  padding: 5px;
  margin: 5px;
  text-align: center;
}

#delivery-time span {
  font-size: 0.9rem;
}

#summary-container .middle-container {
  justify-content: center;
}

#summary-container .bottom-container {
  width: 100%;
  margin: 0;
}

#finish-purchase-btn {
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  height: 30px;
  width: 175px;
  font-weight: 400;
  display: block;
  margin: auto;
}

#finish-purchase-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 20px;
}

.horizontal-sep {
  width: 99%;
  border-top: 1px dashed var(--txt-terciary-color);
  margin: 20px 0 10px;
}

/* Remoção das setas do cvv */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 1100px) {
  #main-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>