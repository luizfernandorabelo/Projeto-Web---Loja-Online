<template>
  <div id="product-container">
    <PageLocation :location="location"/>
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
            <p id="product-price">R$ {{ (price * amount).toFixed(2) }}</p>
            <p id="payment-type">à vista</p>
          </div>
          <input type="number" name="product-amount" id="product-amount" min="1" v-model="amount">
        </div>
        <div id="cep-container">
          <label for="cep">Calcule o frete e o prazo de entrega:</label>
          <p v-if="cepError" class="error">{{ cepError }}</p>
          <input type="text" name="cep" id="cep" placeholder="Digite seu cep" v-model="cep" v-on:keyup.enter="confirmar">
          <button id="search-cep-btn" @click="calculateDeliveryFee">calcular</button>
          <p v-if="showFee" class="info">R$ {{ deliveryFee.toFixed(2) }} (entrega em {{ deliveryDays }} dias)</p>
        </div>
        <router-link to="/cart"><button id="add-to-cart-btn">Adicionar ao carrino</button></router-link>
      </div>
    </div>
    <Description :text="description"/>
    <Reviews />
    <Avaliar :id="parseInt(this.$route.params.id)" :userId="userId"/>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
import Description from '../components/Description.vue'
import Reviews from '../components/Reviews.vue'
import Products from '../../../jsons/products_and_services.json'
import Avaliar from '../components/Avaliar.vue'
import router from '@/router'
export default {
  name: 'Product',
  components: {
    PageLocation,
    Description,
    Reviews,
    Avaliar
},
  beforeMount (){
    this.getProduct()
  },
  data() {
    return {
      location: [
        {'name': 'Home', 'id': 0, 'path': '/'},
        {'name': 'Animal X', 'id': 1, 'path': '/'},
        // {'name': 'Categoria Y', 'id': 2, 'path': '/product-list'},
        {'name': 'Ração de Teste', 'id': 2, 'path': ''},
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
      deliveryFee: 0,
      deliveryDays: 0,
      showFee: false,
      cepError: '',
      description: '',
      userId: 0,
      animal: '',
      categoria: ''
    }
  },
  methods: {
    getProduct () {
      const productId = parseInt(this.$route.params.id)
      const product = Products.find(product => product.id == productId)
      if (product.categories.includes("servicos")){
        router.push('/service/' + this.$route.params.id)
      }
      this.price = product.price
      this.name = product.name
      this.imgUrl = product.images[0]
      // this.amount = product.stock
      this.description = product.description
      this.location[1].name = product.categories[0]
      // this.location[2].name = product.categories[1]
      this.location[2].name = product.name
      this.location[2].path = '/product/' + this.$route.params.id
      // console.log(product.categories[0])
    },

    calculateDeliveryFee() {
      if (!this.isValidCep()) {
        this.cepError = 'Insira um CEP válido!'
        this.showFee = false
      } else {
        let cepInfo = JSON.parse(localStorage.getItem('cep'))[this.sumCepDigits() % 10]
        this.deliveryFee = cepInfo.fee
        this.deliveryDays = cepInfo.days
        this.showFee = true
        this.cepError = ''
      }
    },
    isValidCep() {
      for (let digit of this.cep) {
        if (isNaN(parseInt(digit)))
          return false
      }
      return this.cep !== '' && this.cep.length === 8
    },
    sumCepDigits() {
      let digitSum = 0;
      for (let digit of this.cep) {
        digitSum += parseInt(digit)
      }
      return digitSum
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

#cep-container .error {
  color: red;
  font-size: .9rem;
  margin-bottom: 5px;
}

#cep-container .info {
  font-size: .9rem;
  margin-top: 12px;
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