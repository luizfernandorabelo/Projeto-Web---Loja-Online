<template>
  <div id="create-account-container">
    <TopHeader />
    <PageLocation :location="location"/>
    <div id="main-container">
      <h2>Criar Conta</h2>
      <div id="input-container">
        <p>Todos os campos com * são obrigatórios</p>
        <input type="text" name="name" id="name" placeholder="Nome*">
        <input type="text" name="email" id="email" placeholder="Email*">
        <input type="text" name="cpf" id="cpf" placeholder="CPF*">
        <input type="text" name="gender" id="gender" placeholder="Gênero*">
        <input type="text" name="telephone" id="telephone" placeholder="Telefone*">
        <input type="text" name="password" id="password" placeholder="Senha*">
        <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirme sua senha*">
        <button>Criar</button>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
  import TopHeader from '../components/TopHeader.vue'
  import Footer from '../components/Footer.vue'
  import PageLocation from '../components/PageLocation.vue'
  export default {
    name: 'CreateAccount',
    components: {
    TopHeader,
    Footer,
    PageLocation
  },
    data() {
      return {
        location: [
          {'name': 'Home', 'id': 0},
          {'name': 'Criar Conta', 'id': 1}
        ],
      }
    }
  }
</script>


<style scoped>
  #main-container {
    margin-top: 20px;
    text-align: center;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 500;
  }
  #input-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 10px;
    width: 310px;
  }
  #input-container p {
    margin-bottom: 10px;
  }
  input[type="text"] {
    border: 1px solid var(--txt-terciary-color);
    border-radius: 5px;
    height: 25px;
    width: 100%;
    margin: 5px auto;
    padding: 0 10px;
    box-sizing: border-box;
  }
  button {
    background-color: var(--bg-secondary-color);
    color: var(--txt-primary-color);
    height: 40px;
    width: 75px;
    margin-left: 235px;
    margin-bottom: 10px;
    margin: 10px 0 10px 235px;
    border: 0;
    border-radius: 10px;
    font-size: 1rem;
    font-weight: 400;
    cursor: pointer;
    box-sizing: border-box;
  }
</style>
