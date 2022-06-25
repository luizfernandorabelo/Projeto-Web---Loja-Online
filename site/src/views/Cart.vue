<template>
  <div id="cart-container">
    <PageLocation :location="location"/>
    <h2>Carrinho</h2>
    <div id="main-container">
      <div id="items-container">
        <div class="header">
          <span>Items</span>
          <span id="clear-cart" @click="clearCart">Limpar carrinho</span>
        </div>
        <div v-if="items.length === 0" class="header">
        <p id="empty-cart"> Ooops... parece que seu carrinho está vazio, volte e faça algumas compras para o seu animalziho!!!</p>
        </div>
        <div class="item" v-else v-for="item in items" :key="item.id">
          <input class="item-check" type="checkbox" name="check" :id="item.id + 'check'" v-model="item.checked"
            @change="updatePrices">
          <img class="item-img" :src="item.images[0]" :alt="'Imagem de ' + item.name">
          <div id="name-amount-price-container">
            <h3 class="item-name">{{ item.name }}</h3>
            <div>
              <input class="item-amount" type="number" name="amount" min="1" :id="item.id + 'amount'"
                v-model="item.amount" @change="updatePrices">
              <span class="item-price">R$ {{ item.price }}</span>
            </div>
          </div>
          <i class="fa-solid fa-trash-can" @click="removeItem(item.id)"></i>
        </div>
      </div>
      <div id="order-data-container">
        <div class="header">
          <h3>Resumo do pedido</h3>
        </div>
        <div id="summary-container">
          <div class="top-container">
            <div>
              <span class="description">Items ({{ items.length }})</span>
              <span class="price">R$ {{ itemsPrice.toFixed(2) }}</span>
            </div>
            <div>
              <span class="description">Frete</span>
              <span class="price">R$ {{ deliveryFee.toFixed(2) }}</span>
            </div>
          </div>
          <div class="horizontal-sep"></div>
          <div class="middle-container">
            <span><i class="fa-solid fa-cart-shopping"></i>TOTAL</span>
            <span>R$ {{ (itemsPrice + deliveryFee).toFixed(2) }}</span>
          </div>
          <div class="bottom-container">
            <button v-if="items.length > 0" id="finish-purchase-btn" @click="finishPurchase">Finalizar a compra</button>
            <router-link to="/">
              <button id="continue-purchase-btn">Continuar comprando</button>
            </router-link>
          </div>
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
  name: 'Cart',
  data() {
    return {
      location: [ 
        {name: 'Home', id: 0, path: '/'},
        {name: 'Carrinho', id: 1, path: '/cart'},
      ],
      items: [],
      deliveryFee: 0,
      itemsPrice: 0,
    }
  },
  created() {
    this.getItems()
    this.updatePrices()
  },
  methods: {
    getItems() {
      const cart = JSON.parse(localStorage.getItem('user')).cart;
      cart.items.forEach(item => {
        let cartItem = JSON.parse(localStorage.getItem('items')).find(itm => itm.id === item.id)
        cartItem.amount = item.amount
        cartItem.checked = true
        this.items.push(cartItem)
      });
    },
    updatePrices() {
      this.calculateDeliveryPrice(),
      this.calculateItemsPrice()
    },
    calculateItemsPrice() {
      this.itemsPrice = 0
      for (let item of this.items) {
        this.itemsPrice += item.checked ? item.amount * item.price : 0
      }
    },
    calculateDeliveryPrice() {
      for (let item of this.items) {
        if (item.checked) {
          this.deliveryFee = JSON.parse(localStorage.getItem('user')).cart.deliveryFee;
          return;
        }
      }
      this.deliveryFee = 0;
    },
    removeItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
      const user = JSON.parse(localStorage.getItem('user'));
      user.cart.items = user.cart.items.filter(item => item.id !== itemId);
      localStorage.setItem('user', JSON.stringify(user));
    },
    clearCart() {
      this.items = []
      this.updatePrices()
      const user = JSON.parse(localStorage.getItem('user'));
      user.cart.items = [];
      user.cart.deliveryFee = 0;
      user.cart.cep = '';
      localStorage.setItem('user', JSON.stringify(user));
    },
    finishPurchase() {
      const user = JSON.parse(localStorage.getItem('user'));
      user.cart.total = this.itemsPrice + this.deliveryFee;
      localStorage.setItem('user', JSON.stringify(user));
      window.location.href = '/finishPurchase';
    }
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

#items-container {
  width: 600px
}

#items-container .header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

#items-container .header span {
  margin: 0 20px;
}

#clear-cart {
  cursor: pointer;
  color: var(--txt-secondary-color);
}

#empty-cart {
  margin-top: 130px;
  text-align: center;
}

.item {
  display: flex;
  align-items: center;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 5px;
  box-sizing: border-box;
  position: relative;
}

.item h3 {
  width: 400px;
}

.fa-trash-can {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

#name-amount-price-container {
  display: flex;
  height: 100px;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 20px;
}

.item-check {
  margin-left: 15px;
}

.item-img {
  height: 100px;
  width: 100px;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  margin-left: 15px;
}

.item-amount {
  width: 45px;
  height: 30px;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  text-align: center;
  outline: 0;
}

.item-amount::-webkit-inner-spin-button,
.item-amount::-webkit-outer-spin-button {
  opacity: 1;
}

.item-price {
  margin-left: 10px;
  color: var(--txt-secondary-color);
}

#order-data-container {
  width: 350px;
  height: 320px;
  box-sizing: border-box;
}

#order-data-container h3 {
  text-align: center;
  font-weight: 500;
  margin-bottom: 5px;
  height: 25px;
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

#summary-container .top-container div,
#summary-container .middle-container {
  display: flex;
  justify-content: space-between;
  width: 330px;
}

#summary-container .top-container div {
  margin-bottom: 10px;
}

#summary-container .top-container .description,
#summary-container .top-container .price {
  margin: 0 10px;
}

#summary-container .top-container .price {
  color: var(--txt-secondary-color);
}

#summary-container .middle-container span {
  font-size: 1.3rem;
  margin: 0 10px;
  color: var(--txt-secondary-color);
}

#summary-container .middle-container span .fa-cart-shopping {
  margin-right: 5px;
}

#finish-purchase-btn,
#continue-purchase-btn {
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  height: 30px;
  width: 175px;
  font-weight: 400;
  display: block;
}

#finish-purchase-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border-radius: 10px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-top: 10px;
}

#continue-purchase-btn {
  color: var(--txt-secondary-color);
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
  #items-container {
    width: 90%;
  }
  .item h3 {
    width: 100%;
  }
}
@media (max-width: 600px) {
  #items-container {
    width: 95%;
  }
}
</style>