<template>
  <div id="categories-container">
    <ul id="categories-list">
      <li><router-link to="/Cachorros">Cachorros</router-link></li>
      <li><router-link to="/Gatos">Gatos</router-link></li>
      <li><router-link to="/Passaros">Pássaros</router-link></li>
      <li><router-link to="/Peixes">Peixes</router-link></li>
    </ul>
  </div>
</template> 


<script>
export default {
  name: 'CategoriesBar',
};
</script>


<style scoped>
#categories-list {
  background-color: var(--bg-secondary-color);
  height: 50px;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin: 0 auto 25px auto;
}

#categories-list li {
  margin: 0 15px;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  color: var(--txt-primary-color);
}
</style>
