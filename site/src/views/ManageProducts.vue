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
    };
  },
  async created() {
    // this.items = JSON.parse(localStorage.getItem('items'));
    this.items = await this.getProducts();
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
</style>