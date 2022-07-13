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
    <button @click="sendReview">Enviar</button>
  </div>
</template>

<script>
export default {
  name: 'Rate',
  props: {
    id: {
      default: 0,
    },
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
      // product: {},
    };
  },
  created() {
    this.user = this.getCurrUserFromLS();
  },
  methods: {
    getCurrUserFromLS() {
      return JSON.parse(localStorage.getItem('user'));
    },
    async sendReview() {
      if (this.user === null) {
        alert('Você precisa estar logado para avaliar');
        window.location.href = '/login';
        return;
      }
      // const items = JSON.parse(localStorage.getItem('items'));
      // const item = items.find((item) => item.id === this.id);
      const item = await this.getItem();
      this.review.userName = this.user.personalInfo.name;
      this.review.email = this.user.personalInfo.email;
      item.rating.feedbacks.push(this.review);
      item.rating.totalStars = this.evaluateStars(item.rating.feedbacks);
      const updated = await this.putItem(item);
      // localStorage.setItem('items', JSON.stringify(items));
      this.$emit('ratingUpdated', item.rating);
    },
    evaluateStars(feedbacks) {
      let totalStars = 0;
      feedbacks.forEach((f) => (totalStars += f.stars));
      return parseInt(totalStars / feedbacks.length);
    },
    async getItem() {
      const response = await fetch(`http://localhost:3000/items/${this.id}`);
      const item = await response.json();
      return item;
    },
    async putItem(item) {
      const response = await fetch(`http://localhost:3000/items/${this.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const updated = await response.json();
      return updated;
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