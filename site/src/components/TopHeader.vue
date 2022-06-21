<template>
  <div id="top-header-container">
    <h1>Azulão Petshop</h1>
    <img src="../assets/logo.png" alt="Logo">
    <ul id="icon-list">
      <li>
        <router-link to="/cart"><i class="fa fa-shopping-cart"></i></router-link>
      </li>
      <li>
        <router-link v-if="!logged" to="/login"><i class="fa fa-solid fa-user"></i>Entrar</router-link>
        <router-link v-else to="/account"><i class="fa fa-solid fa-user"></i>Conta</router-link>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'TopHeader',
  data() {
    return {
      logged: false,
    }
  },
  created() {
    this.verifyLogin()
  },
  methods: {
    verifyLogin() {
      this.logged = localStorage.getItem('user') !== null
    }
  }
}
</script>


<style scoped>
#top-header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  margin: 10px 3% 5px 3%;
  color: var(--txt-secondary-color);
}

h1 {
  font-size: 1.3rem;
  font-weight: 900;
  width: 150px;
}

#icon-list {
  list-style-type: none;
  display: flex;
  width: 150px;
  justify-content: space-evenly;
}

#icon-list li:last-child i {
  margin: 0 5px;
}
</style>
