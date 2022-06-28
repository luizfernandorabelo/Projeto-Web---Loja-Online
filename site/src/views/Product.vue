<template>
  <div id="product-container">
    <PageLocation :location="location" />
    <div id="product-area">
      <img
        id="product-img"
        :src="productInfo.images[0]"
        :alt="productInfo.name + ' image'"
      />
      <div id="product-info">
        <h3 id="product-name">{{ productInfo.name }}</h3>
        <div id="short-review-container">
          <p id="total-stars">{{ productInfo.rating.totalStars.toFixed(2) }}</p>
          <div id="stars-container">
            <i
              class="fa-solid fa-star yellow"
              v-for="index in productInfo.rating.totalStars"
              :key="index"
            ></i>
            <i
              class="fa-solid fa-star gray"
              v-for="index in 5 - productInfo.rating.totalStars"
              :key="index"
            ></i>
          </div>
          <p id="total-opinions">
            ({{ productInfo.rating.feedbacks.length }}) opiniões
          </p>
        </div>
        <div id="price-amount-container">
          <div id="price-container">
            <p id="product-price">
              R$ {{ (productInfo.price * inputs.amount).toFixed(2) }}
            </p>
            <p id="payment-type">à vista</p>
          </div>
          <input
            type="number"
            name="product-amount"
            id="product-amount"
            min="1"
            :max="productInfo.stock"
            v-model="inputs.amount"
          />
        </div>
        <div id="cep-container">
          <label for="cep">Calcule o frete e o prazo de entrega:</label>
          <p v-if="errors.cep" class="error">{{ errors.cep }}</p>
          <input
            type="text"
            name="cep"
            id="cep"
            placeholder="Digite seu cep"
            v-model="inputs.cep"
            v-on:keyup.enter="calculateDeliveryFee"
          />
          <button id="search-cep-btn" @click="calculateDeliveryFee">
            calcular
          </button>
          <p v-if="delivery.showFee" class="info">
            R$ {{ delivery.fee.toFixed(2) }} (entrega em
            {{ delivery.days }} dias)
          </p>
        </div>
        <button id="add-to-cart-btn" @click="addToCart">
          Adicionar ao carrino
        </button>
      </div>
    </div>
    <Description :text="productInfo.description" />
    <Reviews :reviews="productInfo.rating.feedbacks" />
    <Avaliar :id="parseInt(this.$route.params.id)"/>
  </div>
</template>


<script>
import PageLocation from "../components/PageLocation.vue";
import Description from "../components/Description.vue";
import Reviews from "../components/Reviews.vue";
import Avaliar from "../components/Avaliar.vue";
export default {
  name: "Product",
  components: {
    PageLocation,
    Description,
    Reviews,
    Avaliar,
  },
  data() {
    return {
      location: [{ name: "Home", id: 0, path: "/" }],
      inputs: {
        amount: 1,
        cep: "",
      },
      errors: {
        cep: "",
      },
      delivery: {
        fee: 0,
        days: 0,
        showFee: false,
      },
      productInfo: {
        name: "",
        images: [],
        rating: {},
        price: 0,
        stock: 0,
        description: "",
      },
      logged: false,
    };
  },
  created() {
    this.getProduct();
    this.logged = JSON.parse(localStorage.getItem("user")) !== null;
  },
  methods: {
    getProduct() {
      const product = JSON.parse(localStorage.getItem("items")).find(
        (product) => product.id == this.$route.params.id
      );
      this.location.push({
        name: product.categories[0],
        id: 1,
        path: "/" + product.categories[0],
      });
      this.location.push({ name: product.name, id: 2, path: "" });
      this.productInfo.name = product.name;
      this.productInfo.images = product.images;
      this.productInfo.rating = product.rating;
      this.productInfo.price = product.price;
      this.productInfo.stock = product.stock;
      this.productInfo.description = product.description;
    },
    calculateDeliveryFee() {
      if (!this.isValidCep()) {
        this.errors.cep = "Insira um CEP válido!";
        this.delivery.showFee = false;
      } else {
        let cepInfo = JSON.parse(localStorage.getItem("cep"))[
          this.sumCepDigits() % 10
        ];
        this.delivery.fee = cepInfo.fee;
        this.delivery.days = cepInfo.days;
        this.delivery.showFee = true;
        this.errors.cep = "";
      }
    },
    isValidCep() {
      for (let digit of this.inputs.cep) {
        if (isNaN(parseInt(digit))) return false;
      }
      return this.inputs.cep !== "" && this.inputs.cep.length === 8;
    },
    sumCepDigits() {
      let digitSum = 0;
      for (let digit of this.inputs.cep) {
        digitSum += parseInt(digit);
      }
      return digitSum;
    },
    addToCart() {
      if (!this.logged) {
        window.location.href = "/login";
      } else if (this.isValidCep()) {
        this.calculateDeliveryFee();
        this.updateUser();
        window.location.href = "/cart";
      } else {
        this.errors.cep = "Digite um cep válido para continuar!";
      }
    },
    updateUser() {
      const user = JSON.parse(localStorage.getItem("user"));
      const existingItem = user.cart.items.find(
        (item) => item.id == this.$route.params.id
      );
      if (existingItem) {
        existingItem.amount += this.inputs.amount;
      } else {
        user.cart.items.push({
          id: parseInt(this.$route.params.id),
          amount: this.inputs.amount,
        });
      }
      user.cart.cep = this.inputs.cep;
      user.cart.deliveryFee = this.delivery.fee;
      localStorage.setItem("user", JSON.stringify(user));
    },
  },
};
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
  font-size: 0.8rem;
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
  font-size: 0.9rem;
  margin-bottom: 5px;
}

#cep-container .info {
  font-size: 0.9rem;
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