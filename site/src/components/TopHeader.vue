<template>
  <div id="top-header-container">
    <router-link to="/">
      <img src="../assets/name.png" alt="" id="name" />
    </router-link>
    <img src="../assets/logo.png" alt="Logo" id="logo" />
    <ul id="icon-list">
      <li>
        <router-link v-if="logged" to="/cart"
          ><i class="fa fa-shopping-cart"></i
        ></router-link>
        <router-link v-else to="/login"
          ><i class="fa fa-shopping-cart"></i
        ></router-link>
      </li>
      <li>
        <router-link v-if="!logged" to="/login"
          ><i class="fa fa-solid fa-user"></i>&nbsp;Entrar</router-link
        >
        <router-link v-else to="/account"
          ><i class="fa fa-solid fa-user"></i>&nbsp;Conta</router-link
        >
      </li>
      <li>
        <i
          v-if="logged"
          @click="logOut"
          class="fa fa-solid fa-sign-out-alt"
        ></i>
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
    };
  },
  created() {
    this.verifyLogin();
  },
  methods: {
    verifyLogin() {
      this.logged = localStorage.getItem('user') !== null;
    },
    logOut() {
      localStorage.removeItem('user');
      window.location.href = '/login';
    },
  },
};
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

#name {
  width: 200px;
}

#logo {
  height: 60px;
}

#icon-list {
  list-style-type: none;
  display: flex;
  width: 200px;
  justify-content: space-evenly;
}

@media (max-width: 800px) {
  #logo {
    display: none;
  }
}
</style>
