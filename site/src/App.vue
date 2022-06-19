<template>
  <div class="test-container">
    <TopHeader />
    <CategoriesBar />
    <router-view />
    <Footer />
  </div>

</template>


<script>
import Login from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import ProductList from './views/ProductList.vue'
import Product from './views/Product.vue'
import Service from './views/Service.vue'
import Cart from './views/Cart.vue'
import TopHeader from './components/TopHeader.vue'
import CategoriesBar from './components/CategoriesBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Login,
    CreateAccount,
    ProductList,
    Product,
    Service,
    Cart,
    TopHeader,
    CategoriesBar,
    Footer
  },
  created() {
    // localStorage.removeItem('userID')
    localStorage.setItem('cep', JSON.stringify(
      [
        { fee: 12.50, days: 9 },
        { fee: 21.10, days: 10 },
        { fee: 29.90, days: 6 },
        { fee: 14.20, days: 3 },
        { fee: 23.30, days: 11 },
        { fee: 16.25, days: 8 },
        { fee: 22.90, days: 7 },
        { fee: 11.30, days: 5 },
        { fee: 28.40, days: 4 },
        { fee: 15.70, days: 2 },
      ]
    ));
  }
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css");

:root {
  /* --bg-primary-color: rgb(0, 0, 0); */
  --bg-primary-color: white;
  --bg-secondary-color: rgb(20, 150, 170);
  /* --txt-primary-color: rgb(255, 255, 255);
  --txt-secondary-color: rgb(20, 159, 170); */
  --txt-primary-color: white;
  --txt-secondary-color: rgb(20, 159, 170);
  --txt-terciary-color: black;
}

* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: inherit;
  background-color: inherit;
  font-family: 'Roboto', sans-serif;
}

html {
  background-color: var(--bg-primary-color);
}

hr {
  height: 5px;
  background-color: black;
}

.separator {
  margin: 30px 0;
  border-top: 1px dotted black;
}

.yellow {
  color: yellow;
}

.gray {
  color: gray;
}
</style>
