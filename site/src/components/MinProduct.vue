<template>
  <div id="min-product-container">
    <router-link to="/product">
      <img id="product-img" :src="productImgUrl" :alt="'Imagem de ' + productName">
      <p id="product-name">{{productName}}</p>
      <p id="product-price">{{productPrice}}</p>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'MinProduct',
  props: {
    productName: {
      default: 'Ração de Teste',
    },
    productPrice: {
      default: 99.99,
    },
    productImgUrl: {
      default: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg',
    }
  }
}
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
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 5px;
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