<template>
  <div id="min-manage-product-container">
    <router-link to="/manageProduct">
      <div id="left">
        <img
          id="product-img"
          :src="productImgUrl"
          :alt="'Imagem de ' + productName"
        />
      </div>
      <div id="right">
        <p id="product-name">{{ productName }}</p>
        <p id="product-price">{{ productPrice }}</p>
        <p id="product-code">Cód. Prod.: {{ productCode }}</p>
        <i id="fa-solid fa-trash-can"></i>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'MinManageProduct',
  props: {
    productName: {
      default: 'Ração de Teste',
    },
    productPrice: {
      default: 99.99,
    },
    productImgUrl: {
      default:
        'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg',
    },
    productCode: {
      default: '1eC45X',
    },
    trashCan: {
      default: 'fa-trash-can',
    },
  },
};
</script>


<style scoped>
#min-manage-product-container {
  margin: 10px 20px 15px;
  height: 170px;
  width: 500px;
  text-align: justify;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}

#left {
  float: left;
}

#right {
  float: right;
}

img {
  height: 150px;
  width: 150px;
  border: 1px solid black;
  border-radius: 10px;
  padding-bottom: 5px;
  margin-bottom: 10px;
  cursor: pointer;
}

#product-name {
  font-size: 28px;
  margin-bottom: 5px;
}

#product-price {
  font-size: 28px;
  font-weight: 600;
}

#product-code {
  font-size: 28px;
  display: inline-block;
  margin-bottom: 5px;
}

#fa-trash-can {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>