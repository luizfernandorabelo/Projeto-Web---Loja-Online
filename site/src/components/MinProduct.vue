<template>
  <div id="min-product-container">
    <router-link :to="'/' + itemType + '/' + itemId">
      <img id="product-img" :src="itemImgUrl" :alt="'Imagem de ' + itemName" />
      <p id="product-name">{{ itemName }}</p>
      <p id="product-price">R$ {{ itemPrice.toFixed(2) }}</p>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'MinProduct',
  props: {
    itemId: {
      default: 0,
    },
    itemName: {
      default: 'Ração de Teste',
    },
    itemPrice: {
      default: 99.99,
    },
    itemImgUrl: {
      default:
        'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg',
    },
    itemType: {
      default: 'product',
    },
  },
};
</script>


<style scoped>
#min-product-container {
  margin: 10px 20px 15px;
  width: 200px;
  text-align: center;
}

img {
  height: 200px;
  width: 200px;
  border: 1px solid var(--bg-terciary-color);
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

#product-name {
  margin-bottom: 5px;
}

#product-price {
  font-size: 1.1rem;
  font-weight: 600;
}
</style>