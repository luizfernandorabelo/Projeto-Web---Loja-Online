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
            <div id="credit-card">Cartão de crédito</div>
            <div id="botton-middle-container">
              <input id="cvv" type="number" placeholder="CVV" min="000" max="999"/>
              <select id="installments">
                <option value="1">1x de R$ {{total}}</option>
                <option value="2">2x de R$ {{total / 2}}</option>
                <option value="3">3x de R$ {{total / 3}}</option>
                <option value="4">4x de R$ {{total / 4}}</option>
                <option value="5">5x de R$ {{total / 5}}</option>
                <option value="6">6x de R$ {{total / 6}}</option>
                <option value="7">7x de R$ {{total / 7}}</option>
                <option value="8">8x de R$ {{total / 8}}</option>
                <option value="9">9x de R$ {{total / 9}}</option>
                <option value="10">10x de R$ {{total / 10}}</option>
                <option value="11">11x de R$ {{total / 11}}</option>
                <option value="12">12x de R$ {{total / 12}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="horizontal-sep"></div>
        <div class="bottom-container">
          <div id="confirmation-message">
            <span>Confirme o endereço</span>
          </div>
          <div id="adress">Endereço de entrega</div>
          <div id="delivery-time">
            <span>Prazo de entrega</span>
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
        {name: 'Finalizar compra', id: 2, path: '/finishpurchase'},
      ],
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
  margin-bottom: 40px;
  margin-top: 20px;
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
  margin: 15px 5px 5px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
}

#botton-middle-container {
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

#summary-container .bottom-container {
  justify-content: left;
}

#confirmation-message {
  padding: 10px 0px;
}

#confirmation-message span {
  justify-content: left;
}

#adress {
  padding: 5px;
  margin: 5px;
  text-align: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
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

#summary-container .top-container {
  display: flex;
  justify-content: left;
  width: 330px;
}

#summary-container .middle-container {
  justify-content: center;
}

#finish-purchase-btn {
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  height: 30px;
  width: 175px;
  font-weight: 400;
  display: block;
  justify-content: right;
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
}

@media (max-width: 1100px) {
  #main-container {
    flex-direction: column;
    align-items: center;
  }
}
</style>