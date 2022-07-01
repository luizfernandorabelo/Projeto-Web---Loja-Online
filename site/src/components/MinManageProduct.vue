<template>
  <div id="min-manage-product-container">
    <h3 id="product-name">{{ productName }}</h3>
    <div id="left-right-container">
      <div id="left">
        <img
          id="product-img"
          :src="productImgUrl"
          :alt="'Imagem de ' + productName"
        />
      </div>
      <div id="right">
        <div id="price-code-container">
          <p id="product-price">Preço: {{ productPrice }}</p>
          <p id="product-code">Identificador: {{ productId }}</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'MinManageProduct',
  props: {
    productId: {
      default: -1,
    },
    productName: {
      default: '',
    },
    productPrice: {
      default: 0,
    },
    productImgUrl: {
      default: '',
    },
  },
};
</script>


<style scoped>
#min-manage-product-container {
  height: 230px;
  width: 550px;
  margin: 30px 15px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

#left-right-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

img {
  height: 150px;
  width: 150px;
  border-radius: 10px;
}

#product-name {
  font-size: 1.3rem;
  text-align: center;
  font-weight: normal;
  margin: 10px 0;
}

#price-code-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 150px;
}

#product-price {
  font-size: 1.5rem;
  font-weight: 600;
}

#product-code {
  font-size: 1.3rem;
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

@media (max-width: 600px) {
  #min-manage-product-container {
    width: 450px;
  }
}
</style>