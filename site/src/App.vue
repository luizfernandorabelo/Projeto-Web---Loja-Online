<template>
  <!-- O template do app ficará com uma única div, contendo somente a home. As demais divs
  serão modularizadas na pasta views. Por hora, todas as diferentes "páginas" criadas nos 
  mockups estão sendo implementadas em e apresentadas em conjunto, divididas por linhas horizontais. Faremos a modularização assim que tivermos todas as partes dos mockups
  implementadas e quando tivermos definido como serão implementadas as rotas  -->
  <div class="test-container">

    <Login />
    <div class="separator"></div>

    <CreateAccount />
    <div class="separator"></div>

    <ProductList h2Content="Destaques" h3Content="Nossos Produtos Mais Vendidos"/>
    <div class="separator"></div>

    <ProductList h2Content="Categoria A" h3Content="O melhor da Categoria A"/>
    <div class="separator"></div>
    
    <Product />
    <div class="separator"></div>

    <Service />
    <div class="separator"></div>

    <Cart />
    <div class="separator"></div>

    <!--!------------------------------- Finish Shopping ----------------------------------->
    <!--!------------------------------- Finish Shopping ----------------------------------->



    <!--!----------------------------- Edit Address Client --------------------------------->
    <!--!----------------------------- Edit Address Client --------------------------------->



    <!--!----------------------------- Edit Payment Client --------------------------------->
    <!--!----------------------------- Edit Payment Client --------------------------------->



    <!--!-------------------------- Edit Person-topal Info Client ------------------------------>
    <!--!-------------------------- Edit Personal Info Client ------------------------------>



    <!--!--------------------------- Edit Personal Info Admin ------------------------------>
    <!--!--------------------------- Edit Personal Info Admin ------------------------------>



    <!--!------------------------------- Manage Products ----------------------------------->
    <!--!------------------------------- Manage Products ----------------------------------->



    <!--!-------------------------------- Manage Product ----------------------------------->
    <!--!-------------------------------- Manage Product ----------------------------------->

  </div>

</template>


<script>
import Login from './views/Login.vue'
import CreateAccount from './views/CreateAccount.vue'
import ProductList from './views/ProductList.vue'
import Product from './views/Product.vue'
import Service from './views/Service.vue'
import Cart from './views/Cart.vue'

export default {
  name: 'App',
  components: {
    Login,
    CreateAccount,
    ProductList,
    Product,
    Service,
    Cart
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
