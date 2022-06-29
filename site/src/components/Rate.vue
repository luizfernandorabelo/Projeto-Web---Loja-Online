<template>
  <div id="rate-container">
    <div class="input-container">
      <label for="stars">De 0 a 5, qual é a sua nota para o produto?</label>
      <input
        type="number"
        name="stars"
        id="stars"
        v-model="this.review.stars"
        min="0"
        max="5"
      />
    </div>
    <div class="input-container">
      <label for="comment">Deixe o seu comentário:</label>
      <input
        type="text"
        name="comment"
        id="comment"
        placeholder="Escreva aqui sua avalaiação..."
        v-model="this.review.comment"
      />
    </div>
    <button @click="postReview">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    id: 0,
  },
  data() {
    return {
      review: {
        userName: '',
        email: '',
        comment: '',
        stars: 0,
      },
      user: {},
      product: {},
    };
  },
  created() {
    this.user = this.getUser();
  },
  methods: {
    getUser() {
      return JSON.parse(localStorage.getItem('user'));
    },
    getProduct() {
      return JSON.parse(localStorage.getItem('items')).find(
        (product) => product.id === this.id
      );
    },
    postReview() {
      if (this.user === null) {
        alert('Você precisa estar logado para avaliar');
        window.location.href = '/login';
        return;
      }
      const items = JSON.parse(localStorage.getItem('items'));
      console.log(items);
      const product = items.find((product) => product.id === this.id);
      this.review.userName = this.user.personalInfo.name;
      this.review.email = this.user.personalInfo.email;
      product.rating.totalStars =
        (this.review.stars + product.rating.totalStars) / 2;
      product.rating.feedbacks.push(this.review);
      console.log(product.rating);
      console.log(items);
      localStorage.setItem('items', JSON.stringify(items));
      console.log('review enviada');
      this.$emit('ratingUpdated', product.rating);
    },
  },
};
</script>


<style scoped>
#rate-container {
  margin: 0 3% 15px;
  border: 1px solid var(--bg-terciary-color);
  padding: 5px 20px;
  border-radius: 10px;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
}

.input-container:nth-of-type(1) {
  flex-direction: row;
  align-items: center;
  margin-bottom: 20px;
}

#comment {
  margin-top: 5px;
  height: 1.2rem;
  font-size: 1.01rem;
  outline: 0;
  padding: 5px;
  border: 1px solid var(--bg-terciary-color);
  border-radius: 5px;
}

#stars {
  margin-left: 5px;
  outline: 0;
  border: 1px solid var(--bg-terciary-color);
  height: 20px;
  text-align: center;
  border-radius: 5px;
}

#stars::-webkit-inner-spin-button,
#stars::-webkit-outer-spin-button {
  opacity: 1;
}

button {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  width: 70px;
  height: 30px;
  margin-bottom: 5px;
  margin-top: 15px;
  margin-left: calc(100% - 70px);
}
</style>