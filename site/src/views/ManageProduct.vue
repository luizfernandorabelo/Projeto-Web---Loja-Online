<template>
  <div id="product-container">
    <PageLocation :location="location" />
    <div id="product-area">
      <img id="product-img" :src="imgUrl" :alt="name + ' image'" />
      <div id="product-info">
        <h3 id="product-name">{{ name }}</h3>
        <div id="short-review-container">
          <p id="total-stars">{{ review.totalStars.toFixed(2) }}</p>
          <div id="stars-container">
            <i
              class="fa-solid fa-star yellow"
              v-for="index in review.totalStars"
              :key="index"
            ></i>
            <i
              class="fa-solid fa-star gray"
              v-for="index in 5 - review.totalStars"
              :key="index"
            ></i>
          </div>
          <p id="total-opinions">({{ review.totalOpinions }}) opiniões</p>
        </div>
        <div id="price-container">
          <p>Preço do produto:</p>
          <p id="product-price">R$ {{ price.toFixed(2) }}</p>
        </div>
        <div id="stock-container">
          <p>Quantidade em estoque:</p>
          <input
            type="number"
            name="product-stock"
            id="product-stock"
            min="0"
            v-model="stock"
          />
        </div>
        <div id="category-container">
          <p>Categoria:</p>
          <p id="product-category">{{ category }} ></p>
        </div>
        <div id="btn-container">
          <button id="save-editions-btn">Salvar edições</button>
          <button id="exclude-product-btn">Excluir produto</button>
        </div>
      </div>
    </div>
    <Description />
    <Reviews />
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import Description from '../components/Description.vue';
export default {
  name: 'Product',
  components: {
    PageLocation,
    Description,
  },
  data() {
    return {
      location: [
        { name: 'Home', id: 0 },
        { name: 'Animal X', id: 1 },
        { name: 'Categoria Y', id: 2 },
        { name: 'Ração de Teste', id: 3 },
      ],
      name: 'Ração de teste',
      price: 99.99,
      imgUrl:
        'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg',
      review: {
        totalOpinions: 99,
        totalStars: 4,
      },
      stock: 60,
      category: [
        { name: 'Animal X', id: 0 },
        { name: 'Categoria Y', id: 1 },
        { name: 'Ração de Teste', id: 2 },
      ],
    };
  },
};
</script>


<style scoped>
#product-area {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;
}

#product-img {
  height: 350px;
  width: 350px;
  margin-right: 3%;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 15px;
}

#product-info {
  width: 350px;
  margin-left: 3%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#product-name {
  font-size: 1.5rem;
  color: var(--txt-secondary-color);
}

#short-review-container {
  display: flex;
  margin-top: 20px;
  font-size: 1.2rem;
}

#stars-container {
  margin-left: 5px;
  margin-right: 5px;
}

#total-opinions {
  font-size: 0.8rem;
}

#price-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#product-price {
  color: var(--txt-secondary-color);
  font-size: 1.3rem;
  margin-left: 15px;
}

#stock-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#product-stock {
  width: 45px;
  height: 30px;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  text-align: center;
  outline: 0;
  margin-left: 15px;
}

#category-container {
  margin-top: 20px;
  align-items: center;
}

#product-category {
  color: var(--txt-secondary-color);
}

#product-stock::-webkit-inner-spin-button,
#product-stock::-webkit-outer-spin-button {
  opacity: 1;
}

#btn-container {
  display: flex;
  margin-top: 20px;
  align-items: center;
}

#save-editions-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#save-editions-btn {
  margin-top: 20px;
  height: 35px;
  width: 170px;
}

#exclude-product-btn {
  background-color: red;
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#exclude-product-btn {
  margin-top: 20px;
  margin-left: 15px;
  height: 35px;
  width: 170px;
}
</style>