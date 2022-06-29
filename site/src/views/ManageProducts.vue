<template>
  <div id="manage-products-container">
    <PageLocation :location="location" />
    <div id="main-container">
      <div id="products">
        <MinManageProduct
          v-for="item in items"
          :key="item.id"
          :productName="item.name"
          :productPrice="item.price"
          :productImgUrl="item.images[0]"
        />
      </div>
    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import MinManageProduct from '../components/MinManageProduct.vue';
export default {
  name: 'ManageProducts',
  components: {
    PageLocation,
    MinManageProduct,
  },
  data() {
    return {
      location: [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'Gerenciar Usuários', path: '/manageUsers' },
      ],
      items: [],
    };
  },
  created() {
    this.items = JSON.parse(localStorage.getItem('items'));
    console.log(this.items);
  },
};
</script>


<style scoped>
#products {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>