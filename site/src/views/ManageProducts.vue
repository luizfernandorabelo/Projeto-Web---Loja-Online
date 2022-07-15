<template>
  <div id="manage-products-container">
    <PageLocation :location="location" />
    <div id="main-container">
      <div id="products">
        <div v-for="item in items" :key="item.id">
          <router-link :to="'/manageProduct/' + item.id">
            <MinManageProduct
              :productId="item.id"
              :productName="item.name"
              :productPrice="item.price"
              :productImgUrl="item.images[0]"
            />
          </router-link>
        </div>
      </div>
    </div>
    <router-link to="/createProduct">
      <button id="create-product-btn"><i class="fa-solid fa-plus"></i></button>
    </router-link>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import MinManageProduct from '../components/MinManageProduct.vue';
export default {
  name: 'ManageProducts',
  components: {
    PageLocation,
    MinManageProduct,
  },
  data() {
    return {
      location: [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'Gerenciar Produtos', path: '/manageProducts' },
      ],
      items: [],
      isAdm: false,
      logged: false,
    };
  },
  async created() {
    // this.items = JSON.parse(localStorage.getItem('items'));
    this.items = await this.getProducts();
    if (JSON.parse(localStorage.getItem('user'))) {
      this.logged = JSON.parse(localStorage.getItem('user')) !== null;
      this.isAdm = JSON.parse(localStorage.getItem('user')).admin;
    }
    if (!this.isAdm || !this.logged) {
      window.location.href = '/';
    }
  },
  methods: {
    async getProducts() {
      const response = await fetch('http://localhost:3000/items');
      const products = await response.json();
      return products;
    },
  },
};
</script>


<style scoped>
#products {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}

#create-product-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  height: 100px;
  width: 100px;
  margin-left: calc(97% - 100px);
  margin-bottom: 15px;
  border: 0;
  border-radius: 50%;
  font-size: 3rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  position: fixed;
  right: 1%;
  top: 85%;
}
</style>