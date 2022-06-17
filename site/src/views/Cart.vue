<template>
  <div id="cart-container">
    <TopHeader />
    <CategoriesBar />
    <PageLocation :location="location"/>
    <h2>Carrinho</h2>
    <div id="main-container">
      <div id="items-container">
        <div class="header">
          <span>Items</span>
          <span id="clear-cart">Limpar carrinho</span>
        </div>
        <div class="item" v-for="item in items" :key="item.id">
          <input class="item-check" type="checkbox" name="check" :id="item.id+'check'" v-model="item.checked" @change="updatePrices"> 
          <img class="item-img" :src="item.imgUrl" :alt="'Imagem de ' + item.name">
          <div id="name-amount-price-container">
            <h3 class="item-name">{{item.name}}</h3>
            <div>
              <input class="item-amount" type="number" name="amount" min="1" :id="item.id+'amount'" v-model="item.amount" @change="updatePrices">
              <span class="item-price">R$ {{item.price}}</span>
            </div>
          </div>
          <i class="fa-solid fa-trash-can"></i>
        </div>
      </div>
      <div id="order-data-container">
        <div class="header">
          <h3>Resumo do pedido</h3>
        </div>
        <div id="summary-container">
          <div class="top-container">
            <div>
              <span class="description">Items ({{items.length}})</span>
              <span class="price">R$ {{itemsPrice.toFixed(2)}}</span>
            </div>
            <div>
              <span class="description">Frete</span>
              <span class="price">R$ {{deliveryPrice.toFixed(2)}}</span>
            </div>
          </div>
          <div class="horizontal-sep"></div>
          <div class="middle-container">
            <span><i class="fa-solid fa-cart-shopping"></i>TOTAL</span>
            <span>R$ {{(itemsPrice + deliveryPrice).toFixed(2)}}</span>
          </div>
          <div class="bottom-container">
            <button id="finish-purchase-btn">Finalizar a compra</button>
            <button id="continue-purchase-btn">Continuar comprando</button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>  
</template>


<script>
  import CategoriesBar from '../components/CategoriesBar.vue'
  import Footer from '../components/Footer.vue'
  import PageLocation from '../components/PageLocation.vue'
  import TopHeader from '../components/TopHeader.vue'
  export default {
    components: { TopHeader, CategoriesBar, Footer, PageLocation },
    name: 'Cart',
    data() {
      return {
        location: [ 
          {'name': 'Home', 'id': 0},
          {'name': 'Carrinho', 'id': 1},
        ],
        items: [
          { id: 0, name: 'Ração Aleatória 1', amount: 1, checked: true, price: 99.99, delivery: 5.00, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg' },
          { id: 1, name: 'Ração Aleatória 2', amount: 2, checked: true, price: 99.99, delivery: 5.00, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg' },
          { id: 2, name: 'Banho e Tosa', amount: 1, checked: true, price: 99.99, delivery: 5.00, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg' },
          { id: 3, name: 'Ração Aleatória 3', amount: 1, checked: true, price: 99.99, delivery: 5.00, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg' },
        ],
        deliveryPrice: 0,
        itemsPrice: 0,
      }
    },
    methods: {
      calculateItemsPrice() {
        this.itemsPrice = 0
        for (let item of this.items) {
          this.itemsPrice += item.checked ? item.amount * item.price : 0
        }
      },
      calculateDeliveryPrice() {
        this.deliveryPrice = 0
        for (let item of this.items) {
          this.deliveryPrice += item.checked ? item.delivery : 0
        }
      },
      updatePrices() {
        this.calculateDeliveryPrice(),
        this.calculateItemsPrice()
      }
    },
    mounted() {
      this.updatePrices()
    }
  }
</script>


<style scoped>
  #main-container {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 30px;
  }
  h2 {
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;
  }
  #items-container .header {
    width: 450px;
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
  .item {
    display: flex;
    align-items: center;
    border: 1px solid var(--txt-terciary-color);
    border-radius: 10px;
    width: 450px;
    margin-bottom: 10px;
    padding: 5px;
    box-sizing: border-box;
    position: relative;
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
  #finish-purchase-btn, #continue-purchase-btn {
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
</style>