<template>
  <div id="create-account-container">
    <PageLocation :location="location"/>
    <div id="main-container">
      <h2>Criar Conta</h2>
      <div id="input-container">
        <p>Todos os campos com * são obrigatórios</p>
        <p v-if="Errors.name">{{ Errors.name }}</p>
        <input type="text" name="name" id="name" placeholder="Nome*" v-model="inputs.name">
        <p v-if="Errors.email">{{ Errors.email }}</p>
        <input type="text" name="email" id="email" placeholder="Email*" v-model="inputs.email">
        <p v-if="Errors.cpf">{{ Errors.cpf }}</p>
        <input type="text" name="cpf" id="cpf" placeholder="CPF*" v-model="inputs.cpf">
        <p v-if="Errors.gender">{{ Errors.gender }}</p>
        <input type="text" name="gender" id="gender" placeholder="Gênero*" v-model="inputs.gender">
        <p v-if="Errors.telephone">{{ Errors.telephone }}</p>
        <input type="text" name="telephone" id="telephone" placeholder="Telefone*" v-model="inputs.telephone">
        <p v-if="Errors.password">{{ Errors.password }}</p>
        <input type="password" name="password" id="password" placeholder="Senha*" v-model="inputs.password">
        <p v-if="Errors.confPasswd">{{ Errors.confPasswd }}</p>
        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme sua senha*"
          v-model="inputs.confPasswd" v-on:keyup.enter="confirm">
        <button @click="confirm">Criar</button>
      </div>
    </div>
  </div>
</template>


<script>
  import PageLocation from '../components/PageLocation.vue'
  export default {
    name: 'CreateAccount',
    components: {
    PageLocation,
  },
  data() {
    return {
      location: [
        { 'name': 'Home', 'id': 0 },
        { 'name': 'Criar Conta', 'id': 1 }
      ],
      error_message: '',
      inputs: {
        name: '',
        email: '',
        cpf: '',
        gender: '',
        telephone: '',
        password: '',
        confPasswd: '',
      },
      Errors: {
        name: '',
        email: '',
        cpf: '',
        gender: '',
        telephone: '',
        password: '',
        confPasswd: '',
      },
      emptyErrorCode: [],
    }
  },

  methods: {


    confirm() {
      for (let erro in this.Errors) {
        this.Errors[erro] = ''
      }
      let erro = false
      let aux
      let fields = { name: 'nome', email: 'email', cpf: 'cpf', password: 'senha', confPasswd: 'confirmar senha', telephone: 'telefone', gender: 'genero' }
      for (let atributo in this.inputs) {
        aux = this.is_input_empty(this.inputs[atributo], fields[atributo], atributo);
        if (!erro) {
          erro = aux
        }
      }
      aux = this.check_cpf_format()
      if (!erro) erro = aux;
      aux = this.check_password_match()
      if (!erro) erro = aux;
      aux = this.check_email_format()
      if (!erro) erro = aux;
      this.check_telephone_format()
      if (!erro) erro = aux;
      if (!erro) {
        if (this.create_user()) {
          alert('Usuário criado com sucesso!')
        }
        
      }
    },


    create_user() {
      let user = {
        name: this.inputs.name,
        email: this.inputs.email,
        cpf: this.inputs.cpf,
        password: this.inputs.password,
        telephone: this.inputs.telephone,
        gender: this.inputs.gender
      }
      let id
      for (id in users) {
        if (users[id].email === this.inputs.email) {
          this.Errors.name = "email ja cadastrado"
          return false
        }
      }
      id = String(parseInt(id+1))
      users[id] = user
      return true
    },

    check_telephone_format() {
      let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
      if (!regex.test(this.inputs.telephone)) {
        this.Errors.telephone = "Telefone invalido"
        return true
      }
    },

    check_cpf_format() {
      if (this.inputs.cpf === '') return
      // console.log(this.inputs.cpf)
      let regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
      if (!this.inputs.cpf.match(regex)) {
        this.Errors.cpf = 'CPF inválido'
        return true
      }
      return false
    },

    check_password_match() {
      if (this.inputs.password != '' && this.inputs.confPasswd != '') {
        if (this.inputs.password != this.inputs.confPasswd) {
          this.Errors.confPasswd = 'Senhas não coincidem'
          return true
        }
      }
      return false
    },

    check_email_format() {
      if (this.inputs.email === '') return
      let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.inputs.email.toLowerCase().match(regex)) {
        this.Errors.email = 'Email inválido'
        return true
      }
      return false
    },


    is_input_empty(field_input, field_name, atributo) {
      if (field_input === '') {
        this.emptyErrorCode.push(field_name)
        this.Errors[atributo] = 'Por favor preencha o campo ' + field_name
        return true
      }
      return false
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
