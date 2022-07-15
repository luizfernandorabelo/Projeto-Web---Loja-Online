<template>
  <div id="product-container">
    <PageLocation :location="location" />
    <div id="product-area">
      <img
        id="product-img"
        :src="product.images[0]"
        :alt="product.name + ' image'"
      />
      <div id="product-info">
        <h3 id="product-name">{{ product.name }}</h3>
        <div id="short-review-container">
          <p id="total-stars">
            {{ parseInt(product.rating.totalStars).toFixed(2) }}
          </p>
          <div id="stars-container">
            <i
              class="fa-solid fa-star yellow"
              v-for="index in parseInt(product.rating.totalStars)"
              :key="index"
            ></i>
            <i
              class="fa-solid fa-star gray"
              v-for="index in 5 - parseInt(product.rating.totalStars)"
              :key="index"
            ></i>
          </div>
          <p id="total-opinions">
            ({{ product.rating.feedbacks.length }}) opiniões
          </p>
        </div>
        <div id="price-container">
          <p>Preço do produto:</p>
          <input
            type="number"
            name="product-price"
            id="product-price"
            min="0"
            v-model="product.price"
          />
        </div>
        <div id="stock-container">
          <p>Quantidade em estoque:</p>
          <input
            type="number"
            name="product-stock"
            id="product-stock"
            min="0"
            v-model="product.stock"
          />
        </div>
        <div id="btn-container">
          <button id="save-editions-btn" @click="saveEditions">
            Salvar Edições
          </button>
          <button id="exclude-product-btn" @click="excludeProduct">
            Excluir Produto
          </button>
        </div>
      </div>
    </div>
    <Description
      :text="product.description"
      editable="true"
      @edit="updateDescription"
    />
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import Description from '../components/Description.vue';
export default {
  name: 'Product',
  components: {
    PageLocation,
    Description,
  },
  data() {
    return {
      location: [
        { name: 'Home', id: 0, path: '/' },
        { name: 'Gerenciar Produtos', id: 1, path: '/manageProducts' },
      ],
      product: {
        name: '',
        images: [''],
        rating: {
          totalStars: 0,
          feedbacks: [],
        },
        price: 0,
        stock: 0,
        description: '',
        isAdm: false,
        logged: false,
      },
    };
  },
  async created() {
    // this.product = JSON.parse(localStorage.getItem('items')).find(
    //   (item) => item.id === parseInt(this.$route.params.id)
    // );
    this.product = await this.getProduct();
    if (JSON.parse(localStorage.getItem('user'))) {
      this.logged = JSON.parse(localStorage.getItem('user')) !== null;
      this.isAdm = JSON.parse(localStorage.getItem('user')).admin;
    }
    if (!this.isAdm || !this.logged) {
      window.location.href = '/';
    }
  },
  methods: {
    updateDescription(newContent) {
      this.product.description = newContent;
    },
    async excludeProduct() {
      if (confirm('Clique em OK para confirmar a exclusão do produto')) {
        // let items = JSON.parse(localStorage.getItem('items'));
        // items = items.filter((item) => item.id !== this.product.id);
        // localStorage.setItem('items', JSON.stringify(items));
        const deleted = await this.deleteProduct(this.product);
        alert('Produto excluído com sucesso!');
        window.location.href = '/manageProducts';
      }
    },
    async saveEditions() {
      if (confirm('Clique em OK para confirmar a edição do produto')) {
        // let items = JSON.parse(localStorage.getItem('items'));
        // items = items.filter((item) => item.id !== this.product.id);
        // items.unshift(this.product);
        // localStorage.setItem('items', JSON.stringify(items));
        const updated = await this.putProduct(this.product);
        alert('Produto atualizado com sucesso!');
        window.location.href = '/manageProducts';
      }
    },
    async getProduct() {
      // const product = JSON.parse(localStorage.getItem('items')).find(
      //   (product) => product.id == this.$route.params.id
      // );
      const response = await fetch(
        `http://localhost:3000/items/${this.$route.params.id}`
      );
      const product = await response.json();
      return product;
    },
    async putProduct(product) {
      const response = await fetch(
        `http://localhost:3000/items/${product.id}`,
        {
          method: 'PUT',
          body: JSON.stringify(product),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
      const updated = await response.json();
      return updated;
    },
    async deleteProduct(product) {
      const response = await fetch(
        `http://localhost:3000/items/${product.id}`,
        {
          method: 'DELETE',
        }
      );
      return response;
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

#price-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#product-price {
  color: var(--txt-secondary-color);
  font-size: 1.3rem;
  margin-left: 15px;
}

#stock-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#product-stock,
#product-price {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  text-align: center;
  outline: 0;
  margin-left: 15px;
}

#product-stock {
  width: 45px;
  height: 30px;
}

#product-price {
  width: 75px;
  height: 35px;
}

#category-container {
  margin-top: 20px;
  align-items: center;
}

#product-category {
  color: var(--txt-secondary-color);
}

#product-stock::-webkit-inner-spin-button,
#product-stock::-webkit-outer-spin-button,
#product-price::-webkit-inner-spin-button,
#product-price::-webkit-outer-spin-button {
  opacity: 1;
}

#btn-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#save-editions-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#save-editions-btn {
  margin-top: 20px;
  height: 35px;
  width: 170px;
}

#exclude-product-btn {
  background-color: red;
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#exclude-product-btn {
  margin-top: 20px;
  margin-left: 15px;
  height: 35px;
  width: 170px;
}
</style>