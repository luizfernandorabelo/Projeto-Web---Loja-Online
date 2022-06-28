<template>
  <div id="description-container">
    <h3>Descrição</h3>
    <p>{{ text }}</p>
  </div>
</template>


<script>
export default {
  name: 'Description',
  // data() {
  //   return {
  //     text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque ab dolorum enim a quia tenetur reiciendis delectus voluptate quidem impedit cupiditate, accusamus repellat earum quam quis ipsum perspiciatis doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero cupiditate eligendi, nostrum, numquam ducimus inventore voluptate iste in accusantium quibusdam. Vero, ratione eos voluptate blanditiis facilis omnis harum similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque ab dolorum enim a quia tenetur reiciendis delectus voluptate quidem impedit cupiditate, accusamus repellat earum quam quis ipsum perspiciatis doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero cupiditate eligendi, nostrum, numquam ducimus inventore voluptate iste in accusantium quibusdam. Vero, ratione eos voluptate blanditiis facilis omnis harum similique! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque ab dolorum enim a quia tenetur reiciendis delectus voluptate quidem impedit cupiditate, accusamus repellat earum quam quis ipsum perspiciatis doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero cupiditate eligendi, nostrum, numquam ducimus inventore voluptate iste in accusantium quibusdam. Vero, ratione eos voluptate blanditiis facilis omnis harum similique!'
  //   }
  // }
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