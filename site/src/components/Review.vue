<template>
  <div id="review-container">
    <div id="review-left">
      <p id="user-name">{{ userName }}</p>
      <div id="total-stars-container">
        <p id="total-stars">{{ stars.toFixed(2) }}</p>
        <div id="stars-container">
          <i
            class="fa-solid fa-star yellow"
            v-for="index in parseInt(stars)"
            :key="index"
          ></i>
          <i
            class="fa-solid fa-star gray"
            v-for="index in parseInt(5 - stars)"
            :key="index"
          ></i>
        </div>
      </div>
    </div>
    <div id="review-right">
      <p>{{ comment }}</p>
    </div>
  </div>
</template>


<script>
export default {
  name: 'Review',
  props: {
    userName: { default: '' },
    stars: { default: 0 },
    comment: { default: '' },
  },
};
</script>


<style>
#review-container {
  margin-left: 3%;
  margin-right: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

#review-left {
  text-align: center;
  width: 150px;
}

#review-right {
  width: calc(100% - 175px);
}

#total-stars-container {
  display: flex;
  justify-content: space-evenly;
  margin-top: 10px;
}

#total-stars {
  font-weight: 500;
}

#stars-container {
  display: flex;
}

#user-name {
  font-weight: 600;
}
</style>