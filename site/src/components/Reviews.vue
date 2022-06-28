<template>
  <div id="reviews-container">
    <h3>Avaliações</h3>
    <p v-if="reviews.length === 0" class="no-reviews">
      Esse produto ainda não tem avaliações
    </p>
    <Review
      v-else
      v-for="review in reviews"
      :key="review.userName"
      :userName="review.userName"
      :stars="review.stars"
      :comment="review.comment"
    />
  </div>
</template>


<script>
import Review from './Review.vue';
export default {
  name: 'Reviews',
  components: {
    Review,
  },
  props: {
    reviews: {
      default: [],
    },
  },
};
</script>


<style scoped>
#reviews-container {
  margin-top: 30px;
  margin-bottom: 30px;
}

p.no-reviews {
  margin-left: 3%;
}

h3 {
  text-align: left;
  margin-left: 3%;
  margin-bottom: 20px;
  color: var(--txt-secondary-color);
  font-weight: 600;
}
</style>