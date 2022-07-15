<template>
  <div id="product-list-container">
    <h2>{{ h2Content }}</h2>
    <h3>{{ h3Content }}</h3>
    <ul id="products">
      <li v-for="product in products" :key="product.id">
        <MinProduct
          :itemId="product.id"
          :itemName="product.name"
          :itemPrice="product.price"
          :itemImgUrl="product.images[0]"
          :itemType="
            product.categories.includes('servicos') ? 'service' : 'product'
          "
        />
      </li>
    </ul>
  </div>
</template>


<script>
import MinProduct from '../components/MinProduct.vue';
export default {
  name: 'ProductList',
  components: {
    MinProduct,
  },
  data() {
    return {
      h2Content: '',
      h3Content: '',
      products: [],
    };
  },
  async created() {
    const targetAnimal = this.$route.params.animal;
    if (targetAnimal) {
      this.h2Content = targetAnimal.toUpperCase();
      this.h3Content =
        'Os melhores produtos e serviços para ' + targetAnimal.toLowerCase();
      // this.products = JSON.parse(localStorage.getItem('items')).filter((item) =>
      //   item.categories.includes(targetAnimal)
      // );
      this.products = await this.fetchProducts();
      this.products = this.products.filter((item) =>
        item.categories.includes(targetAnimal)
      );
    } else {
      this.h2Content = 'Destaques';
      this.h3Content = 'Os nossos produtos e serviços mais vendidos';
      // this.products = JSON.parse(localStorage.getItem('items'));
      this.products = await this.fetchProducts();
    }
  },
  async updated() {
    const targetAnimal = this.$route.params.animal;
    if (targetAnimal) {
      this.h2Content = targetAnimal.toUpperCase();
      this.h3Content =
        'Os melhores produtos e serviços para ' + targetAnimal.toLowerCase();
      // this.products = JSON.parse(localStorage.getItem('items')).filter((item) =>
      //   item.categories.includes(targetAnimal)
      // );
      this.products = await this.fetchProducts();
      this.products = this.products.filter((item) =>
        item.categories.includes(targetAnimal)
      );
    } else {
      this.h2Content = 'Destaques';
      this.h3Content = 'Os nossos produtos e serviços mais vendidos';
      // this.products = JSON.parse(localStorage.getItem('items'));
      this.products = await this.fetchProducts();
    }
  },
  methods: {
    async fetchProducts() {
      const response = await fetch('http://localhost:3000/items');
      const products = await response.json();
      return products;
    },
  },
};
</script>


<style scoped>
#product-list-container {
  min-height: calc(100vh - 300px);
}

h2,
h3 {
  text-align: center;
}

h2 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
  color: var(--darker-blue-color);
}

h3 {
  font-weight: 500;
  margin-bottom: 20px;
}

#products {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>