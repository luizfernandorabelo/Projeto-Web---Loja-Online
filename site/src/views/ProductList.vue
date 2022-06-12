<template>
  <div id="product-list-container">
    <TopHeader />
    <CategoriesBar />  
    <h2>{{h2Content}}</h2>
    <h3>{{h3Content}}</h3>
    <ul id="products">
      <li v-for="product in products" :key="product.id">
        <MinProduct :productName="product.name" :productPrice="product.price" :productImgUrl="product.imgUrl"/>
      </li>
    </ul>
    <Footer />
  </div>
</template>


<script>
import CategoriesBar from '../components/CategoriesBar.vue';
import TopHeader from '../components/TopHeader.vue';
import Footer from '../components/Footer.vue';
import MinProduct from '../components/MinProduct.vue';
export default {
  name: 'ProductList',
  components: {
    CategoriesBar,
    TopHeader,
    Footer,
    MinProduct
},
  props: {
    h2Content: {
      type: String,
      default: '',
    },
    h3Content: {
      type: String,
      default: '',
    },
    products: {
      default: [
        { id: 0, name: 'Ração de Teste 1', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 1, name: 'Ração de Teste 2', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 2, name: 'Ração de Teste 3', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 3, name: 'Ração de Teste 4', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 4, name: 'Ração de Teste 5', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 5, name: 'Ração de Teste 6', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 6, name: 'Ração de Teste 7', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 7, name: 'Ração de Teste 8', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 8, name: 'Ração de Teste 9', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
        { id: 9, name: 'Ração de Teste 10', price: 99.99, imgUrl: 'https://lojaludica.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/p/r/produto-teste_1.jpg'},
      ]
    }
  }
}
</script>


<style>
  h2, h3 {
    text-align: center;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 5px;
    color: var(--darker-blue-color);
  }
  h3 {
    font-weight: 500;
    margin-bottom: 20px;
  }
  #products {
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 20px;
    flex-wrap: wrap;
    list-style-type: none;
  }


</style>