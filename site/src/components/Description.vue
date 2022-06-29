<template>
  <div id="description-container">
    <h3>Descrição</h3>
    <p>{{ text }}</p>
  </div>
</template>


<script>
export default {
  name: 'Description',
  props: {
    text: String,
  },
};
</script>


<style scoped>
#description-container {
  margin-bottom: 20px;
}

h3 {
  text-align: left;
  margin-left: 3%;
  margin-bottom: 20px;
  color: var(--txt-secondary-color);
  font-weight: 600;
}

p {
  margin-left: 3%;
  margin-right: 3%;
}
</style>