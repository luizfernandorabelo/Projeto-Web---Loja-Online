<template>
  <form>
    <div class="form-group">
      <p>Tipo</p>
      <select name="tipo" v-model="tipo">
        <option value="produto">Produto</option>
        <option value="servico">Serviço</option>
      </select>
    </div>
    <div class="input-group">
      <p>Nome do produto</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product name"
        v-model="product.name"
      />
    </div>
    <div class="input-group">
      <p>URL das imagens (separadas por virgulas)</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product images URLs"
        v-model="rawImages"
      />
    </div>
    <div class="input-group">
      <p>Descrição do produto</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product description"
        v-model="product.description"
      />
    </div>
    <div class="input-group">
      <p>Preço do produto</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product price"
        v-model="product.price"
      />
    </div>
    <div class="input-group">
      <p>Quantidade do produto</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product quantity"
        v-model="product.quantity"
      />
    </div>
    <div class="input-group">
      <p>Categorias do produto (separar por virgulas)</p>
      <input
        type="text"
        class="form-control"
        placeholder="Product category"
        v-model="rawCategories"
      />
    </div>
  </form>
  <button @click="createProduct">Adicionar produto</button>
</template>
<script>
import PageLocation from '../components/PageLocation.vue';
export default {
  name: 'Product',
  components: {
    PageLocation,
  },
  data() {
    return {
      product: {
        name: '',
        description: '',
        price: '',
        quantity: '',
        categories: [],
        images: [],
      },
      rawCategories: '',
      rawImages: '',
      logged: false,
      isAdmin: false,
      tipo: 'produto',
    };
  },
  created() {
    this.fetchUser();
    if (!this.isAdmin) {
      window.location.href = '/';
    }
  },
  methods: {
    fetchUser() {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.users = JSON.parse(localStorage.getItem('users'));
      if (this.user !== null) {
        this.logged = true;
        this.isAdmin = this.user.admin;
      } else {
        this.logged = false;
        this.isAdmin = false;
      }
    },
    createProduct() {
      if (this.checkError()) {
        return;
      }
      const categories = this.rawCategories.split(',');
      const images = this.rawImages.split(',');
      this.product.categories = categories;
      this.product.images = images;
      //   localStorage.setItem('items', JSON.stringify([this.product]));
      if (this.tipo === 'servico') {
        // insere na tabela de serviços
        alert('servico adicionado adicionado');
        this.product.categories.push('servico');
      } else {
        alert('produto adicionado adicionado');
      }
      console.log(this.product.categories);
      //   window.location.href = '/ManageProducts';
    },
    checkError() {
      const error = false;
      Object.keys(this.product).some((campo) => {
        console.log(campo);
        if (this.product[campo] == '') {
          alert('Preencha todos os campos');
          error = true;
          return true;
        }
        else{
            return true;
        }
      });
      return error;
    },
  },
};
</script>
<style>
</style>