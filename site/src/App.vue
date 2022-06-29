<template>
  <div class="test-container">
    <TopHeader />
    <CategoriesBar />
    <router-view />
    <Footer />
  </div>
</template>


<script>
import TopHeader from './components/TopHeader.vue';
import CategoriesBar from './components/CategoriesBar.vue';
import Footer from './components/Footer.vue';

import fakeUsers from './fakedb/users';
import fakeCeps from './fakedb/ceps';
import fakeItems from './fakedb/items';

export default {
  name: 'App',
  components: {
    TopHeader,
    CategoriesBar,
    Footer,
  },
  created() {
    this.initializeLocalStorage();
  },
  methods: {
    initializeLocalStorage() {
      this.setUsersToLS();
      this.setCepsToLS();
      this.setItemsToLS();
    },
    setUsersToLS() {
      localStorage.setItem('users', JSON.stringify(fakeUsers.users));
    },
    setCepsToLS() {
      localStorage.setItem('ceps', JSON.stringify(fakeCeps.ceps));
    },
    setItemsToLS() {
      localStorage.setItem('items', JSON.stringify(fakeItems.items));
    },
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css');

:root {
  /* --bg-primary-color: rgb(0, 0, 0);
  --bg-secondary-color: rgb(20, 159, 170);
  --bg-terciary-color: rgb(255, 255, 255);
  --txt-primary-color: rgb(255, 255, 255);
  --txt-secondary-color: rgb(20, 159, 170);
  --txt-terciary-color: rgb(0, 0, 0); */
  --bg-primary-color: white;
  --bg-secondary-color: rgb(20, 150, 170);
  --bg-terciary-color: black;
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

.yellow {
  color: yellow;
}

.gray {
  color: gray;
}
</style>
