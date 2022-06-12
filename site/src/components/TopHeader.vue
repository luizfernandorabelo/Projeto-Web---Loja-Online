<template>
  <div id="top-header-container">
    <h1>Azulão Petshop</h1>
    <img src="../assets/logo.png" alt="Logo">
    <ul id="icon-list">
      <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
      <li><a href="#"><i class="fa fa-solid fa-user"></i>Entrar</a></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'TopHeader',
}
</script>


<style scoped>
  #top-header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    padding: 0 40px 0 30px;
    margin: 10px 0 5px 0;
    color: var(--txt-secondary-color);
  }
  h1 {
    font-size: 1.3rem;
    font-weight: 900;
    margin-left: 5px;
  }
  #icon-list {
    list-style-type: none;
    display: flex;
    width: 100px;
    justify-content: space-between;
  }
  #icon-list li:last-child i {
    margin: 0 5px;
  }
</style>
