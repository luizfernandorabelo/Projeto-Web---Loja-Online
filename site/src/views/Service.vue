<template>
  <div id="service-container">
    <PageLocation :location="location"/>
    <div id="service-area">
      <img id="service-img" :src="imgUrl" :alt="name + ' image'">
      <div id="service-info">
        <h3 id="service-name">{{name}}</h3>
        <div id="short-review-container">
          <p id="total-stars">{{review.totalStars.toFixed(2)}}</p>
          <div id="stars-container">
            <i class="fa-solid fa-star yellow" v-for="index in review.totalStars" :key="index"></i>
            <i class="fa-solid fa-star gray" v-for="index in 5 - review.totalStars" :key="index"></i>
          </div>
          <p id="total-opinions">({{review.totalOpinions}}) opiniões</p>
        </div>
        <div id="price-amount-container">
          <div id="price-container">
            <p id="service-price">R$ {{price.toFixed(2)}}</p>
            <p id="payment-type">à vista</p>
          </div>
          <input type="number" name="service-amount" id="service-amount" min="1" v-model="amount">
        </div>
        <div id="cep-container">
          <label for="cep">Informe o CEP</label>
          <input type="text" name="cep" id="cep" placeholder="Digite seu cep">
          <button id="search-cep-btn">Buscar</button>
        </div>
        <div id="date-container">
          <label for="date">Informe a data desejada</label>
          <input type="date" name="date" id="date" placeholder="dd/mm/aa">
          <button id="search-date-btn">Buscar</button>
        </div>
        <router-link to="/cart"><button id="add-to-cart-btn">Adicionar ao carrino</button></router-link>
      </div>
    </div>
    <Description />
    <Reviews />
  </div>
</template>


<script>
  import PageLocation from '../components/PageLocation.vue'
  import Description from '../components/Description.vue'
  import Reviews from '../components/Reviews.vue'
  export default {
    name: 'Service',
    components: {
      PageLocation,
      Description,
      Reviews,
    },
    data() {
      return {
        location: [
          {'name': 'Home', 'id': 0},
          {'name': 'Animal X', 'id': 1},
          {'name': 'Categoria Y', 'id': 2},
          {'name': 'Banho de Teste', 'id': 3}
        ],
        name: 'Banho de teste',
        price: 99.99,
        imgUrl: 'https://institutouniversal.vteximg.com.br/arquivos/ids/156886-1000-1000/image_banho_e_tosa.jpg?v=635367146237300000',
        review: {
          totalOpinions: 99,
          totalStars: 4,
          comments: [
            { userName: 'Rosângela', comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit.' },
            { userName: 'Edicreusa', comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit. Lorem ipislum dolor. Consectetur adipiscing elit.' }
          ]
        },
        amount: 1,
      }
    }
  }
</script>


<style scoped>
  #service-area {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  #service-img {
    height: 350px;
    width: 350px;
    margin-right: 3%;
    border: 1px solid var(--txt-terciary-color);
    border-radius: 15px;
  }
  #service-info {
    width: 350px;
    margin-left: 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  #service-name {
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
  #service-price {
    color: var(--txt-secondary-color);
    font-size: 1.3rem;
  }
  #service-amount {
    width: 45px;
    height: 30px;
    border: 1px solid var(--txt-terciary-color);
    border-radius: 5px;
    text-align: center;
    outline: 0;
    margin-left: 15px;
  }
  #service-amount::-webkit-inner-spin-button,
  #service-amount::-webkit-outer-spin-button {
    opacity: 1;
  }
  #cep-container, #date-container {
    margin-top: 20px;
  }
  #cep-container label, #date-container label {
    display: block;
    margin-bottom: 10px;
  }
  #cep, #date {
    border: 1px solid var(--txt-terciary-color);
    border-radius: 5px;
    height: 25px;
    width: 130px;
    padding: 0 10px;
    box-sizing: border-box;
    outline: 0;
  }
  #search-cep-btn, #search-date-btn, #add-to-cart-btn {
    background-color: var(--bg-secondary-color);
    color: var(--txt-primary-color);
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    box-sizing: border-box;
  }
  #search-cep-btn, #search-date-btn {
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
