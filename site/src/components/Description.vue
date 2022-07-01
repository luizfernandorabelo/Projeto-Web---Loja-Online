<template>
  <div id="description-container">
    <h3>Descrição</h3>
    <p :contenteditable="editable" @input="onInput">{{ text }}</p>
  </div>
</template>


<script>
export default {
  name: 'Description',
  props: {
    text: String,
    editable: {
      default: false,
    },
  },
  methods: {
    onInput(e) {
      this.$emit('edit', e.target.innerText);
    },
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

[contenteditable='true'] {
  border-radius: 5px;
  outline: 1px solid var(--bg-terciary-color);
  padding: 10px;
}
</style>