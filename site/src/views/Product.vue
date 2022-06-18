<template>
  <div id="product-container">
    <TopHeader />
    <CategoriesBar />
    <PageLocation :location="location" />
    <div id="product-area">
      <img id="product-img" :src="imgUrl" :alt="name + ' image'">
      <div id="product-info">
        <h3 id="product-name">{{ name }}</h3>
        <div id="short-review-container">
          <p id="total-stars">{{ review.totalStars.toFixed(2) }}</p>
          <div id="stars-container">
            <i class="fa-solid fa-star yellow" v-for="index in review.totalStars" :key="index"></i>
            <i class="fa-solid fa-star gray" v-for="index in 5 - review.totalStars" :key="index"></i>
          </div>
          <p id="total-opinions">({{ review.totalOpinions }}) opiniões</p>
        </div>
        <div id="price-amount-container">
          <div id="price-container">
            <p id="product-price">R$ {{ price.toFixed(2) }}</p>
            <p id="payment-type">à vista</p>
          </div>
          <input type="number" name="product-amount" id="product-amount" min="1" v-model="amount">
        </div>
        <div id="cep-container">
          <label for="cep">Calcule o frete e o prazo de entrega:</label>
          <p v-if="cep_erro">{{ cep_erro }}</p>
          <input type="text" name="cep" id="cep" placeholder="Digite seu cep" v-model="cep" v-on:keyup.enter="confirmar">
          <button id="search-cep-btn" @click="calculateFee">calcular</button>
          <p v-if="show_fee">R$ {{ frete }}</p>
        </div>
        <button id="add-to-cart-btn">Adicionar ao carrino</button>
      </div>
    </div>
    <Description />
    <Reviews />
    <Footer />
  </div>
</template>


<script>
import CategoriesBar from '../components/CategoriesBar.vue'
import TopHeader from '../components/TopHeader.vue'
import PageLocation from '../components/PageLocation.vue'
import Footer from '../components/Footer.vue'
import Description from '../components/Description.vue'
import Reviews from '../components/Reviews.vue'
export default {
  components: {
    TopHeader,
    CategoriesBar,
    PageLocation,
    Footer,
    Description,
    Reviews
  },
  name: 'Product',
  data() {
    return {
      location: [
        { 'name': 'Home', 'id': 0 },
        { 'name': 'Animal X', 'id': 1 },
        { 'name': 'Categoria Y', 'id': 2 },
        { 'name': 'Ração de Teste', 'id': 3 }
      ],
      name: 'Ração de teste',
      price: 99.99,
      imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg',
      review: {
        totalOpinions: 99,
        totalStars: 4,
        comments: [
          { userName: 'Rosângela', comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit.' },
          { userName: 'Edicreusa', comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit. Lorem ipislum dolor. Consectetur adipiscing elit.' }
        ]
      },
      amount: 1,
      cep: '',
      frete: 0,
      last_cep: '',
      show_fee: false,
      cep_erro: ''
    }
  },
  methods: {
    calculateFee() {
      if (this.cep.length == 8 && (this.last_cep !== this.cep || this.last_cep === '')) {
        this.frete = (Math.random() * 30).toFixed(2);
        while (this.frete < 10)
          this.frete = (Math.random() * 30).toFixed(2);
        this.last_cep = this.cep;
        this.show_fee = true
        this.cep_erro = ''
      }
      else if (this.cep === '' || this.cep.length != 8) {
        this.cep_erro = 'Insira um CEP válido';
        this.last_cep = this.cep;
        this.show_fee = false
      }
      else {
        this.cep_erro = ''
        this.last_cep = this.cep;
      }
    }
  }
}
</script>


<style scoped>
#product-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

#product-img {
  height: 350px;
  width: 350px;
  margin-right: 3%;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 15px;
}

#product-info {
  width: 350px;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#product-name {
  font-size: 1.5rem;
  color: var(--txt-secondary-color);
}

#short-review-container {
  display: flex;
  margin-top: 20px;
  font-size: 1.2rem;
}

#stars-container {
  margin-left: 5px;
  margin-right: 5px;
}

#total-opinions {
  font-size: .8rem;
}

#price-amount-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#product-price {
  color: var(--txt-secondary-color);
  font-size: 1.3rem;
}

#product-amount {
  width: 45px;
  height: 30px;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  text-align: center;
  outline: 0;
  margin-left: 15px;
}

#product-amount::-webkit-inner-spin-button,
#product-amount::-webkit-outer-spin-button {
  opacity: 1;
}

#cep-container {
  margin-top: 20px;
}

#cep-container label {
  display: block;
  margin-bottom: 10px;
}

#cep {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  height: 25px;
  width: 130px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: 0;
}

#search-cep-btn,
#add-to-cart-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#search-cep-btn {
  height: 25px;
  width: 75px;
  margin-left: 5px;
}

#add-to-cart-btn {
  margin-top: 20px;
  height: 35px;
  width: 170px;
}
</style>