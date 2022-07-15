<template>
  <div id="service-container">
    <PageLocation :location="location" />
    <div id="service-area">
      <img
        id="service-img"
        :src="serviceInfo.images[0]"
        :alt="serviceInfo.name + ' image'"
      />
      <div id="service-info">
        <h3 id="service-name">{{ serviceInfo.name }}</h3>
        <div id="short-review-container">
          <p id="total-stars">
            {{ parseInt(serviceInfo.rating.totalStars.toFixed(2)) }}
          </p>
          <div id="stars-container">
            <i
              class="fa-solid fa-star yellow"
              v-for="index in parseInt(serviceInfo.rating.totalStars)"
              :key="index"
            ></i>
            <i
              class="fa-solid fa-star gray"
              v-for="index in 5 - parseInt(serviceInfo.rating.totalStars)"
              :key="index"
            ></i>
          </div>
          <p id="total-opinions">
            ({{ serviceInfo.rating.feedbacks.length }}) opiniões
          </p>
        </div>
        <div id="price-amount-container">
          <div id="price-container">
            <p id="service-price">
              R$ {{ (serviceInfo.price * inputs.amount).toFixed(2) }}
            </p>
            <p id="payment-type">à vista</p>
          </div>
          <!-- <input
            type="number"
            name="service-amount"
            id="service-amount"
            min="1"
            :max="serviceInfo.stock"
            v-model="inputs.amount"
            onkeydown="return false"
          /> -->
        </div>
        <div id="cep-container">
          <label for="cep">Informe o CEP</label>
          <p v-if="errors.cep" class="error">{{ errors.cep }}</p>
          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="Digite seu cep"
            v-model="inputs.cep"
          />
          <button id="search-cep-btn" @click="checkCepAvailability">
            Buscar
          </button>
          <p v-if="cepInfo" class="info">{{ cepInfo }}</p>
        </div>
        <div id="date-container">
          <label for="date">Informe a data desejada</label>
          <p v-if="errors.date" class="error">{{ errors.date }}</p>
          <input
            type="date"
            name="date"
            id="date"
            placeholder="dd/mm/aa"
            v-model="inputs.date"
          />
          <button id="search-date-btn" @click="checkDateAvailability">
            Buscar
          </button>
          <p v-if="dateInfo" class="info">{{ dateInfo }}</p>
        </div>
        <button id="add-to-cart-btn" @click="addToCart">
          Adicionar ao carrino
        </button>
      </div>
    </div>
    <Description :text="serviceInfo.description" />
    <Reviews :reviews="serviceInfo.rating.feedbacks" />
    <div v-if="this.canRate">
      <button
        v-if="!readingRatingState"
        id="rate-service-btn"
        @click="changeRatingState"
      >
        Avaliar serviço
      </button>
      <Rate
        v-else
        :id="parseInt(this.$route.params.id)"
        @ratingUpdated="updateRating"
      />
    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import Description from '../components/Description.vue';
import Reviews from '../components/Reviews.vue';
import Rate from '../components/Rate.vue';
export default {
  name: 'Service',
  components: {
    PageLocation,
    Description,
    Reviews,
    Rate,
  },
  data() {
    return {
      location: [{ name: 'Home', id: 0, path: '/' }],
      inputs: {
        amount: 1,
        cep: '',
        date: '',
      },
      errors: {
        cep: '',
        date: '',
      },
      serviceInfo: {
        name: '',
        images: [''],
        rating: {
          totalStars: 0,
          feedbacks: [],
        },
        price: 0,
        stock: 0,
        description: '',
      },
      cepInfo: '',
      dateInfo: '',
      logged: false,
      readingRatingState: false,
      datas: [],
      canRate: true,
    };
  },
  async created() {
    await this.getService();
    this.logged = JSON.parse(localStorage.getItem('user')) !== null;
    this.canRate = this.userCanRate(this.serviceInfo.rating);
  },
  methods: {
    userCanRate(rating) {
      for (let i = 0; i < rating['feedbacks'].length; i++) {
        if (
          rating['feedbacks'][i].userName ==
          JSON.parse(localStorage.getItem('user')).personalInfo.name
        ) {
          console.log(rating['feedbacks'][i].userName);
          console.log(
            JSON.parse(localStorage.getItem('user')).personalInfo.name
          );
          return false;
        }
      }
      return true;
    },
    async getService() {
      // const service = JSON.parse(localStorage.getItem('items')).find(
      //   (service) => service.id == this.$route.params.id
      // );
      const response = await fetch(
        `http://localhost:3000/items/${this.$route.params.id}`
      );
      const service = await response.json();
      this.location.push({
        name: service.categories[0],
        id: 1,
        path: '/' + service.categories[0],
      });
      this.location.push({ name: service.name, id: 2, path: '' });
      this.serviceInfo.name = service.name;
      this.serviceInfo.images = service.images;
      this.serviceInfo.rating = service.rating;
      this.serviceInfo.price = service.price;
      this.serviceInfo.stock = service.stock;
      this.serviceInfo.description = service.description;
      this.datas = service.dates;
    },
    checkCepAvailability() {
      if (!this.isValidCep()) {
        this.errors.cep = 'Insira um CEP válido!';
        this.cepInfo = '';
        return false;
      } else {
        if (!this.isAttendingCep()) {
          this.cepInfo = 'Não atendemos sua região :(';
          return false;
        } else {
          this.cepInfo = 'Atendemos sua região!';
          this.errors.cep = '';
          return true;
        }
      }
    },
    isValidCep() {
      for (let digit of this.inputs.cep) {
        if (isNaN(parseInt(digit))) return false;
      }
      return this.inputs.cep !== '' && this.inputs.cep.length === 8;
    },
    isAttendingCep() {
      return this.inputs.cep.startsWith('13560');
    },
    checkDateAvailability() {
      for (let date of this.datas) {
        console.log(date);
        if (date === this.inputs.date) {
          this.dateInfo = '';
          this.errors.date = 'A data selecionada ja foi reservada';
          return false;
        }
      }
      if (!this.isValidDate()) {
        this.errors.date = 'Insira uma data válida!';
        this.dateInfo = '';
        return false;
      } else {
        this.dateInfo = 'Temos vagas nessa data!';
        this.errors.date = '';
        return true;
      }
    },
    isValidDate() {
      console.log(this.inputs.date);
      if (this.inputs.date === '') return false;
      let expectedDay = new Date(this.inputs.date);
      let today = new Date();
      return expectedDay >= today;
    },
    async addToCart() {
      if (!this.logged) {
        window.location.href = '/login';
        console.log(this.isValidCep());
      } else if (this.checkCepAvailability() && this.checkDateAvailability()) {
        await this.updateUser();
        window.location.href = '/cart';
      } else {
        alert('Verifique os campos CEP e DATA!');
      }
    },
    changeRatingState() {
      this.readingRatingState = !this.readingRatingState;
      this.canRate = this.userCanRate(this.serviceInfo.rating);
    },
    updateRating(newRating) {
      this.serviceInfo.rating = newRating;
      this.changeRatingState();
    },
    async updateUser() {
      const user = JSON.parse(localStorage.getItem('user'));
      const existingItem = user.cart.items.find(
        (item) => item.id == this.$route.params.id
      );
      if (existingItem) {
        existingItem.amount += this.inputs.amount;
      } else {
        user.cart.items.push({
          id: parseInt(this.$route.params.id),
          amount: this.inputs.amount,
          data: this.inputs.date,
        });
      }
      user.cart.cep = this.inputs.cep;
      localStorage.setItem('user', JSON.stringify(user));
      const updated = await this.putUser(user);
    },
    async putUser(user) {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const updated = await response.json();
      console.log(user);
      return updated;
    },
  },
};
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
  font-size: 0.8rem;
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

#cep-container,
#date-container {
  margin-top: 20px;
}

#cep-container label,
#date-container label {
  display: block;
  margin-bottom: 10px;
}

#cep,
#date {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  height: 25px;
  width: 130px;
  padding: 0 10px;
  box-sizing: border-box;
  outline: 0;
}

button {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#search-cep-btn,
#search-date-btn {
  height: 25px;
  width: 75px;
  margin-left: 5px;
}

#rate-service-btn {
  width: 130px;
  height: 35px;
  margin-left: 3%;
  margin-bottom: 15px;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-bottom: 5px;
}

.info {
  font-size: 0.9rem;
  margin-top: 12px;
}

#add-to-cart-btn {
  margin-top: 20px;
  height: 35px;
  width: 170px;
}

@media (max-width: 768px) {
  #service-area {
    flex-direction: column;
  }
  #service-img {
    margin-bottom: 20px;
  }
  #service-info {
    width: 80%;
    margin-top: 20px;
    align-items: center;
    text-align: center;
  }
}
</style>
