<template>
  <div id="reviews-container">
    <h3>Avaliações</h3>
    <Review v-for="review in reviews" :key="review.userName" :userName="review.userName" :stars="review.stars" :comment="review.comment"/>
  </div>  
</template>


<script>
import Review from './Review.vue'
export default {
  name: "Reviews",
  components: {
    Review
  },
  data() {
    return {
      reviews: [
        { userName: 'Rosângela', stars: 4, comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit. Vero, ratione eos voluptate blanditiis facilis omnis harum similique!' },
        { userName: 'Edicreusa', stars: 3, comment: 'Lorem ipsilum dolor sit amet, consectetur adipiscing elit. Lorem ipislum dolor. Consectetur adipiscing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero cupiditate eligendi, nostrum, numquam ducimus inventore voluptate iste in accusantium quibusdam. Vero, ratione eos voluptate blanditiis facilis omnis harum similique!' }
      ]
    };
  },
}
</script>


<style scoped>
#reviews-container {
  margin-top: 30px;
  margin-bottom: 30px;
}

h3 {
  text-align: left;
  margin-left: 3%;
  margin-bottom: 20px;
  color: var(--txt-secondary-color);
  font-weight: 600;
}
</style>