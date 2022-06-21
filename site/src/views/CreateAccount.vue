<template>
  <div id="create-account-container">
    <PageLocation :location="location"/>
    <div id="main-container">
      <h2>Criar Conta</h2>
      <div id="input-container">
        <p id="required-description">Todos os campos com * são obrigatórios</p>
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
        <input type="text" name="name" id="name" placeholder="Nome*" v-model="inputs.name">
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
        <input type="text" name="email" id="email" placeholder="Email*" v-model="inputs.email">
        <p v-if="errors.cpf" class="error">{{ errors.cpf }}</p>
        <input type="text" name="cpf" id="cpf" placeholder="CPF*" v-model="inputs.cpf">
        <p v-if="errors.gender" class="error">{{ errors.gender }}</p>
        <input type="text" name="gender" id="gender" placeholder="Gênero" v-model="inputs.gender">
        <p v-if="errors.telephone" class="error">{{ errors.telephone }}</p>
        <input type="text" name="telephone" id="telephone" placeholder="Telefone*" v-model="inputs.telephone">
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
        <input type="password" name="password" id="password" placeholder="Senha*" v-model="inputs.password">
        <p v-if="errors.confirmPasswd" class="error">{{ errors.confirmPasswd }}</p>
        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme sua senha*"
          v-model="inputs.confirmPasswd" v-on:keyup.enter="validateNewAccount">
        <button @click="validateNewAccount">Criar</button>
      </div>
    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
import userData from '../../server/users.js'
export default {
  name: 'CreateAccount',
  components: {
    PageLocation,
  },
  data() {
    return {
      location: [
        { 'name': 'Home', 'id': 0, 'path': '/' },
        { 'name': 'Criar Conta', 'id': 1, 'path': '/create-account' },
      ],
      inputs: {
        name: '',
        email: '',
        cpf: '',
        gender: '',
        telephone: '',
        password: '',
        confirmPasswd: '',
      },
      errors: {
        name: '',
        email: '',
        cpf: '',
        telephone: '',
        password: '',
        confirmPasswd: '',
      },
    }
  },
  methods: {
    validateNewAccount() {
      this.clearErrors()
      this.checkName()
      this.checkEmail()
      this.checkCpf()
      this.checkTelephone()
      this.checkPassword()
      if (this.areInputsValid() && this.createUser()) {
        alert('Usuário criado com sucesso!')
      } 
    },
    clearErrors() {
      for (let error in this.errors) {
        this.errors[error] = ''
      }
    },
    checkName() {
      if (this.inputs.name.trim() === '') {
        this.errors.name = 'Por favor, preencha o campo nome!'
        return
      }
      if (this.inputs.name.trim().length <= 3) {
        this.errors.name = 'Por favor, preencha um nome válido!'
      }
    },
    checkEmail() {
      if (this.inputs.email.trim() === '') {
        this.errors.email = 'Por favor, preencha o campo email!'
        return
      }
      let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.inputs.email.toLowerCase().match(regex)) {
        this.errors.email = 'Email inválido'
      }
    },
    checkTelephone() {
      if (this.inputs.telephone.trim() === '') {
        this.errors.telephone = 'Por favor, preencha o campo telefone!'
        return
      }
      let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
      if (!regex.test(this.inputs.telephone)) {
        this.errors.telephone = "Telefone inválido!"
      }
    },
    checkCpf() {
      if (this.inputs.cpf.trim() === '') {
        this.errors.cpf = 'Por favor, preencha o campo CPF!'
        return
      }
      let regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
      if (!this.inputs.cpf.match(regex)) {
        this.errors.cpf = 'CPF inválido!'
      }
    },
    checkPassword() {
      if (this.inputs.password.trim() === '') {
        this.errors.password = 'Por favor, preencha o campo senha!'
      }
      if (this.inputs.confirmPasswd.trim() === '') {
        this.errors.confirmPasswd = 'Por favor, preencha o campo confirme sua senha!'
      }
      if (this.inputs.password !== this.inputs.confirmPasswd) {
        this.errors.confPasswd = 'As senhas não coincidem!'
      }
    },
    areInputsValid() {
      for (let field in this.errors) {
        if (this.errors[field].length > 0)
          return false
      }
      return true
    },
    createUser() {
      if (this.isExistingUser())
        return false
      let user = {
        name: this.inputs.name,
        email: this.inputs.email,
        cpf: this.inputs.cpf,
        password: this.inputs.password,
        telephone: this.inputs.telephone,
        gender: this.inputs.gender,
        id: userData.users[userData.users.length-1].id + 1
      }
      userData.users.push(user)
      console.log(userData.users)
      return true
    },
    isExistingUser() {
      for (let existingUser of userData.users) {
        if (existingUser.CPF === this.inputs.cpf) {
          this.errors.cpf = "CPF já cadastrado!"
          return true
        }
        if (existingUser.email === this.inputs.email) {
          this.errors.email = "Email já cadastrado!"
          return true
        }
      }
      return false
    }
  }
}
</script>


<style scoped>
#create-account-container {
  margin-bottom: 20px;
}

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

#input-container p.error {
  font-size: .85rem;
  text-align: left;
  color: red;
  margin-top: 7px;
}

#required-description {
  margin-bottom: 10px;
}

input {
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
