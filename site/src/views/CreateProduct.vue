<template>
  <div>
    <h3>Criar Novo Produto</h3>
    <div id="main-container">
      <div id="first-container">
        <span class="description">Tipo:</span> <br />
        <select id="product-type" name="tipo" v-model="tipo">
          <option value="produto">Produto</option>
          <option value="servico">Serviço</option>
        </select>
        <br />
        <span class="description">Nome do produto</span>
        <input
          type="text"
          placeholder="Nome do produto"
          v-model="product.name"
        />
        <span class="description"
          >Categorias do produto (separar por virgulas):</span
        >
        <input type="text" placeholder="Categorias" v-model="rawCategories" />
        <span class="description">Preço do item:</span> <br />
        <input
          id="product-price"
          type="number"
          min="0"
          placeholder="0.00"
          v-model="product.price"
        />
        <br />
        <div v-if="this.tipo == 'produto'">
        <span class="description">Quantidade em estoque:</span> <br />
        <input
          id="product-stock"
          type="number"
          min="0"
          placeholder="0"
          v-model="product.stock"
        />
        <br />
        </div>
      </div>
      <div id="second-container">
        <span class="description"
          >URL das imagens (separadas por virgulas):</span
        >
        <textarea
          class="big-input"
          name="images"
          placeholder="Imagens do produto"
          rows="5"
          v-model="rawImages"
        />
        <span class="description">Descrição do produto:</span>
        <textarea
          class="big-input"
          name="description"
          placeholder="Descrição do produto"
          rows="7"
          v-model="product.description"
        />
      </div>
    </div>
    <div id="btn-container">
      <button id="create-btn" @click="createProduct">Adicionar produto</button>
    </div>
  </div>
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
        id: 0,
        name: '',
        description: '',
        price: '',
        stock: 0,
        rating: {
          totalStars: 0,
          feedbacks: [],
        },
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
  async created() {
    this.fetchUser();
    if (!this.isAdmin) {
      window.location.href = '/';
    }
    this.product.id = await this.getID();
  },
  methods: {
    async getID() {
      // const product = JSON.parse(localStorage.getItem('items')).find(
      //   (product) => product.id == this.$route.params.id
      // );
      const response = await fetch(
        `http://localhost:3000/items`
      );
      const products = await response.json();
      return products[products.length - 1].id + 100;
    },
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
      let servico = {}
      if (this.tipo === 'servico'){
        this.product.stock = 1;
      }
      if (this.checkError()) {
        return;
      }
      const categories = this.rawCategories.split(',');
      const images = this.rawImages.split(',');
      this.product.categories = categories;
      this.product.images = images;
      if (this.tipo === 'servico') {
        this.product.categories.push('servicos');
        servico = this.formataServico()
        this.insereProduto(servico);
        alert('servico adicionado adicionado');
        // insere na tabela de serviços
      } else {
        this.insereProduto(this.product);
        alert('produto adicionado adicionado');
      }
      console.log(this.product.categories);
      //   window.location.href = '/ManageProducts';
    },
    checkError() {
      const inputs = Object.keys(this.product)
      for (let i = 0; i < inputs.length; i++) {
        // if (this.product['stock'] === '' && this.tipo === 'servico') {
        //   continue;
        // }
        if (this.product[inputs[i]] === '') {
          alert('Preencha todos os campos');
          return true;
        }
      }
      return false

    },
    async insereProduto(product) {
      const response = await fetch(
        `http://localhost:3000/items`,
        {
          method: 'POST',
          body: JSON.stringify(product),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );
        const updated = await response.json();
        return updated;

    },
    formataServico() {
      const servico = {
        id: this.product.id,
        name: this.product.name,
        description: this.product.description,
        price: this.product.price,
        categories: this.product.categories,
        images: this.product.images,
        rating: {
          totalStars: 0,
          feedbacks: [],
        },
        stock: 1,
        dates: []
      };
      return servico
    }
  },
};
</script>


<style scoped>
h3 {
  text-align: center;
  margin-bottom: 5px;
}

#main-container {
  display: inline-flexbox;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: 800px;
  border: 1px solid var(--txt-terciary-color);
  border-radius: 20px;
}

#first-container {
  display: inline-block;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: 350px;
}

#second-container {
  display: inline-block;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  width: 350px;
}

.description {
  margin-top: 5px;
  color: var(--txt-secondary-color);
}

input,
select,
textarea {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  height: 25px;
  width: 100%;
  margin: 5px auto;
  padding: 0 10px;
  box-sizing: border-box;
}

textarea {
  height: 100%;
}

#product-type {
  width: auto;
}

#product-price {
  width: 20%;
}

#product-stock {
  width: 15%;
}

#create-btn {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#create-btn {
  position: relative;
  left: 65%;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 35px;
  width: 170px;
}
</style>