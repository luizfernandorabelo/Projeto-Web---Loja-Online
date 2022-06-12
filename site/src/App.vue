<template>
  <!-- O template do app ficará com uma única div, contendo somente a home. As demais divs
  serão modularizadas na pasta views. Por hora, todas as diferentes "páginas" criadas nos 
  mockups estão sendo implementadas em e apresentadas em conjunto, divididas por linhas horizontais. Faremos a modularização assim que tivermos todas as partes dos mockups
  implementadas e quando tivermos definido como serão implementadas as rotas  -->
  <div class="test-container">

    <!--!------------------------------------- Login --------------------------------------->
    <div id="login-test">
      <hr>
    </div>
    <!--!------------------------------------- Login --------------------------------------->



    <!--!-------------------------------- Create Account ----------------------------------->
    <div id="create-account-test">
      <hr>
    </div>
    <!--!-------------------------------- Create Account ----------------------------------->



    <!--!------------------------------------- Home ---------------------------------------->
    <div id="home-test">
      <hr>
    </div>
    <!--!------------------------------------- Home ---------------------------------------->



    <!--!----------------------------- Products By Category -------------------------------->
    <div id="products-by-category-test">
      <hr>
    </div>
    <!--!----------------------------- Products By Category -------------------------------->



    <!--!------------------------------------ Product -------------------------------------->
    <div id="product-test">
      <hr>
    </div>
    <!--!------------------------------------ Product -------------------------------------->



    <!--!------------------------------------ Service -------------------------------------->
    <div id="service-test">
      <hr>
    </div>
    <!--!------------------------------------ Service -------------------------------------->



    <!--!------------------------------------- Cart ---------------------------------------->
    <div id="cart-test">
      <hr>
    </div>
    <!--!------------------------------------- Cart ---------------------------------------->



    <!--!------------------------------- Finish Shopping ----------------------------------->
    <div id="finish-shopping-test">
      <hr>
    </div>
    <!--!------------------------------- Finish Shopping ----------------------------------->



    <!--!----------------------------- Edit Address Client --------------------------------->
    <div id="edit-address-test">
      <hr>
    </div>
    <!--!----------------------------- Edit Address Client --------------------------------->



    <!--!----------------------------- Edit Payment Client --------------------------------->
    <div id="edit-payment-test">
      <hr>
    </div>
    <!--!----------------------------- Edit Payment Client --------------------------------->



    <!--!-------------------------- Edit Personal Info Client ------------------------------>
    <div id="edit-personal-info-client-test">
      <hr>
    </div>
    <!--!-------------------------- Edit Personal Info Client ------------------------------>



    <!--!--------------------------- Edit Personal Info Admin ------------------------------>
    <div id="edit-personal-info-admin-test">
      <hr>
    </div>
    <!--!--------------------------- Edit Personal Info Admin ------------------------------>



    <!--!------------------------------- Manage Products ----------------------------------->
    <div id="manage-products-test">
      <hr>
    </div>
    <!--!------------------------------- Manage Products ----------------------------------->



    <!--!-------------------------------- Manage Product ----------------------------------->
    <div id="manage-product-test">
      <hr>
    </div>
    <!--!-------------------------------- Manage Product ----------------------------------->

  </div>

</template>


<script>
import TopHeader from './components/TopHeader.vue';

export default {
  name: 'App',
  components: {
    TopHeader
}
}
</script>


<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>
