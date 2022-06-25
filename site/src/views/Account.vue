<template>
  <div id="account-container">
    <PageLocation :location="location"/>
    <div id="main-container">
      <div id="edit-personal-info-container" class="input-container">
        <h3>Informações pessoais</h3>
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
        <input type="text" name="name" id="name" placeholder="Nome" v-model="inputs.name">
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
        <input type="text" name="email" id="email" placeholder="Email" v-model="inputs.email">
        <p v-if="errors.cpf" class="error">{{ errors.cpf }}</p>
        <input type="text" name="cpf" id="cpf" placeholder="CPF" v-model="inputs.cpf">
        <p v-if="errors.gender" class="error">{{ errors.gender }}</p>
        <input type="text" name="gender" id="gender" placeholder="Gênero" v-model="inputs.gender">
        <p v-if="errors.telephone" class="error">{{ errors.telephone }}</p>
        <input type="text" name="telephone" id="telephone" placeholder="Telefone" v-model="inputs.telephone">
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
        <input type="password" name="password" id="password" placeholder="Senha" v-model="inputs.password">
        <p v-if="errors.confirmPasswd" class="error">{{ errors.confirmPasswd }}</p>
        <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirme sua nova senha"
          v-model="inputs.confirmPasswd" v-on:keyup.enter="validateAccount">
      </div>
      <div id="edit-home-address-container" class="input-container">
        <h3>Endereço de entrega</h3>
        <p v-if="errors.cep" class="error">{{ errors.cep }}</p>
        <input type="text" name="cep" id="cep" placeholder="CEP" v-model="inputs.cep">
        <p v-if="errors.city" class="error">{{ errors.city }}</p>
        <input type="text" name="city" id="city" placeholder="Cidade" v-model="inputs.city">
        <p v-if="errors.state" class="error">{{ errors.state }}</p>
        <input type="text" name="state" id="state" placeholder="Estado" v-model="inputs.state">
        <p v-if="errors.district" class="error">{{ errors.district }}</p>
        <input type="text" name="district" id="district" placeholder="Bairro" v-model="inputs.district">
        <p v-if="errors.street" class="error">{{ errors.street }}</p>
        <input type="text" name="street" id="street" placeholder="Logradouro" v-model="inputs.street">
        <p v-if="errors.number" class="error">{{ errors.number }}</p>
        <input type="text" name="number" id="number" placeholder="Número" v-model="inputs.number">
        <p v-if="errors.complement" class="error">{{ errors.complement }}</p>
        <input type="text" name="complement" id="complement" placeholder="Complemento" v-model="inputs.complement">
      </div>
      <div id="edit-paying-info-container" class="input-container">
        <h3>Informações de pagamento</h3>
        <p v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</p>
        <input type="text" name="card-number" id="card-number" placeholder="Número do cartão" v-model="inputs.cardNumber">
        <p v-if="errors.cardHolderName" class="error">{{ errors.cardHolderName }}</p>
        <input type="text" name="card-holder-name" id="card-holder-name" placeholder="Titular do cartão" v-model="inputs.cardHolderName">
        <p v-if="errors.cardHolderCPF" class="error">{{ errors.cardHolderCPF }}</p>
        <input type="text" name="card-holder-cpf" id="card-holder-cpf" placeholder="CPF do titular" v-model="inputs.cardHolderCPF">
        <p v-if="errors.billingAddress" class="error">{{ errors.billingAddress }}</p>
        <input type="text" name="billing-address" id="billing-address" placeholder="Endereço completo de cobrança" v-model="inputs.billingAddress">
        <p v-if="errors.expiringDate" class="error">{{ errors.expiringDate }}</p>
        <input type="text" name="expiring-date" id="expiring-date" placeholder="Data de expiração (mm/aa)" v-model="inputs.expiringDate">
      </div>
    </div>
    <div id="buttons-container">
      <button  v-if="this.is_adm" id="save-btn"><router-link to="/manageUsers">Gerenciar Usuários</router-link></button>
      <button  v-if="this.is_adm" id="save-btn"><router-link to="/manageProducts">Gerenciar Produtos</router-link></button>
      <button @click="logOut" id="logout-btn">Sair</button>
      <button @click="validateAccount" id="save-btn">Salvar</button>

    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
export default {
  components: { PageLocation },
  name: 'Account',
  data() {
    return {
      location: [
        { 'name': 'Home', 'id': 0, 'path': '/' },
        { 'name': 'Conta', 'id': 1, 'path': 'acount' }
      ],
      inputs: {
        name: '',
        email: '',
        cpf: '',
        gender: '',
        telephone: '',
        password: '',
        confirmPasswd: '',
        cep: '',
        city: '',
        state: '',
        district: '',
        street: '',
        number: '',
        complement: '',
        cardNumber: '',
        cardHolderName: '',
        cardHolderCPF: '',
        billingAddress: '',
        expiringDate: ''
      },
      errors: {
        name: '',
        email: '',
        cpf: '',
        telephone: '',
        password: '',
        confirmPasswd: '',
        cep: '',
        // city: '',
        // state: '',
        // district: '',
        // street: '',
        // number: '',
        // complement: '',
        cardNumber: '',
        // cardHolderName: '',
        cardHolderCPF: '',
        billingAddress: '',
        expiringDate: ''
      },
      logged: false,
      is_adm: false
    }
  },
  created() {
    this.fetchUser()
    if (this.logged)
      this.autoFillInputs()
  },
  methods: {
    fetchUser() {
      this.user = JSON.parse(localStorage.getItem('user'))
      this.users = JSON.parse(localStorage.getItem('users'))
      this.logged = this.user !== null
      this.is_adm = this.user.admin
    },
    autoFillInputs() {
      this.inputs.name = this.user.personalInfo.name
      this.inputs.email = this.user.personalInfo.email
      this.inputs.cpf = this.user.personalInfo.CPF
      this.inputs.gender = this.user.personalInfo.gender
      this.inputs.telephone = this.user.personalInfo.telephone
      this.inputs.password = this.user.personalInfo.password
      this.inputs.confirmPasswd = this.user.personalInfo.password
      this.inputs.cep = this.user.address.cep
      this.inputs.city = this.user.address.city
      this.inputs.state = this.user.address.state
      this.inputs.district = this.user.address.district
      this.inputs.street = this.user.address.street
      this.inputs.number = this.user.address.number
      this.inputs.complement = this.user.address.complement
      this.inputs.cardNumber = this.user.card.number
      this.inputs.cardHolderName = this.user.card.holderName
      this.inputs.cardHolderCPF = this.user.card.holderCPF
      this.inputs.billingAddress = this.user.card.billingAddress
      this.inputs.expiringDate = this.user.card.expiringDate
    },
    validateAccount() {
      this.clearErrors()
      this.checkName()
      this.checkEmail()
      this.checkCpf()
      this.checkTelephone()
      this.checkPassword()
      this.checkCep()
      this.checkCardNumber()
      this.checkCardHolderCPF()
      this.checkBillingAddress()
      this.checkExpiringDate()
      if (this.areInputsValid()) {
        if (this.logged)
          this.updateUserObject()
        else
          this.createUserObject()
      } 
      window.location.href = '/'
    },
    clearErrors() {
      for (let error in this.errors) {
        this.errors[error] = ''
      }
    },
    isContentFilled(content) {
      return content.trim() !== ''
    },
    checkName() {
      if (!this.isContentFilled(this.inputs.name)) {
        this.errors.name = 'Por favor, preencha o campo nome!'
        return
      }
      if (this.inputs.name.trim().length <= 3) {
        this.errors.name = 'Por favor, preencha um nome válido!'
      }
    },
    checkEmail() {
      if (!this.isContentFilled(this.inputs.email)) {
        this.errors.email = 'Por favor, preencha o campo email!'
        return
      }
      let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!this.inputs.email.toLowerCase().match(regex)) {
        this.errors.email = 'Email inválido'
      }
    },
    checkTelephone() {
      if (!this.isContentFilled(this.inputs.telephone)) {
        this.errors.telephone = 'Por favor, preencha o campo telefone!'
        return
      }
      let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
      if (!regex.test(this.inputs.telephone)) {
        this.errors.telephone = "Telefone inválido!"
      }
    },
    checkCpf() {
      if (!this.isContentFilled(this.inputs.cpf)) {
        this.errors.cpf = 'Por favor, preencha o campo CPF!'
        return
      }
      let regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
      if (!this.inputs.cpf.match(regex)) {
        this.errors.cpf = 'CPF inválido!'
      }
    },
    checkPassword() {
      if (!this.isContentFilled(this.inputs.password)) {
        this.errors.password = 'Por favor, preencha o campo senha!'
      }
      if (!this.isContentFilled(this.inputs.confirmPasswd)) {
        this.errors.confirmPasswd = 'Por favor, preencha o campo confirme sua senha!'
      }
      if (this.inputs.password !== this.inputs.confirmPasswd) {
        this.errors.confPasswd = 'As senhas não coincidem!'
      }
    },
    checkCep() {
      if (!this.isContentFilled(this.inputs.cep)) {
        this.errors.cep = 'Por favor, preencha o campo cep!'
        return
      }
      for (let digit of this.inputs.cep) {
        if (isNaN(parseInt(digit))) {
          this.errors.cep = 'CEP inválido!'
          return
        }
      }
    },
    checkCardNumber() {
      if (!this.isContentFilled(this.inputs.cardNumber)) {
        this.errors.cardNumber = 'Por favor, preencha o número do cartão!'
        return
      }
      if (this.inputs.cardNumber.trim().length !== 16) {
        this.errors.cardNumber = 'Preencha um cartão válido!'
      }
    },
    checkCardHolderCPF() {
      if (!this.isContentFilled(this.inputs.cardHolderCPF)) {
        this.errors.cardHolderCPF = 'Por favor, preencha o cpf do responsável!'
        return
      }
      let regex = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
      if (!this.inputs.cardHolderCPF.match(regex)) {
        this.errors.cardHolderCPF = 'CPF inválido!'
      }
    },
    checkBillingAddress() {
      if (!this.isContentFilled(this.inputs.billingAddress)) {
        this.errors.billingAddress = 'Por favor, preencha o endereço de cobrança!'
        return
      }
    },
    checkExpiringDate() {
      if (!this.isContentFilled(this.inputs.expiringDate)) {
        this.errors.expiringDate = 'Por favor, preencha a data de expiração!'
        return
      }
      // TODO: regex pra checar formato da data e se já está expirada
    },
    areInputsValid() {
      for (let field in this.errors) {
        if (this.errors[field].length > 0)
          return false
      }
      return true
    },
    updateUserObject() {
      this.user.personalInfo.name = this.inputs.name
      this.user.personalInfo.email = this.inputs.email
      this.user.personalInfo.CPF = this.inputs.cpf
      this.user.personalInfo.gender = this.inputs.gender
      this.user.personalInfo.telephone = this.inputs.telephone
      this.user.personalInfo.password = this.inputs.password
      this.user.personalInfo.password = this.inputs.confirmPasswd
      this.user.address.cep = this.inputs.cep
      this.user.address.city = this.inputs.city
      this.user.address.state = this.inputs.state
      this.user.address.district = this.inputs.district
      this.user.address.street = this.inputs.street
      this.user.address.number = this.inputs.number
      this.user.address.complement = this.inputs.complement
      this.user.card.number = this.inputs.cardNumber
      this.user.card.holderName = this.inputs.cardHolderName
      this.user.card.holderCPF = this.inputs.cardHolderCPF
      this.user.card.billingAddress = this.inputs.billingAddress
      this.user.card.expiringDate = this.inputs.expiringDate
      let users = JSON.parse(localStorage.getItem('users')).filter(user => user.id !== this.user.id)
      users.push(this.user)
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('user', JSON.stringify(this.user))
      alert('Dados atualizados com sucesso!')
    },
    createUserObject() {
      if (this.isExistingUser())
        throw Error
      let user = {
        personalInfo: {
          name: this.inputs.name,
          email: this.inputs.email,
          CPF: this.inputs.cpf,
          gender: this.inputs.gender,
          telephone: this.inputs.telephone,
          password: this.inputs.password,
          password: this.inputs.confirmPasswd,
        },
        address: {
          cep: this.inputs.cep,
          city: this.inputs.city,
          state: this.inputs.state,
          district: this.inputs.district,
          street: this.inputs.street,
          number: this.inputs.number,
          complement: this.inputs.complement,
        },
        card: {
          number: this.inputs.cardNumber,
          holderName: this.inputs.cardHolderName,
          holderCPF: this.inputs.cardHolderCPF,
          billingAddress: this.inputs.billingAddress,
          expiringDate: this.inputs.expiringDate,
        },
        id: this.users.length,
        adimin: false
      }
      let users = JSON.parse(localStorage.getItem('users')).filter(usr => usr.id !== user.id)
      users.push(user)
      localStorage.setItem('users', JSON.stringify(users))
      localStorage.setItem('user', JSON.stringify(user))
      alert('Conta criada com sucesso!')
    },
    isExistingUser() {
      for (let existingUser of this.users) {
        if (existingUser.personalInfo.CPF === this.inputs.cpf) {
          this.errors.cpf = "CPF já cadastrado!"
          return true
        }
        if (existingUser.personalInfo.email === this.inputs.email) {
          this.errors.email = "Email já cadastrado!"
          return true
        }
      }
      return false
    },
    logOut() {
      localStorage.removeItem('user');
      window.location.href = '/login';
    }
  }
}
</script>


<style scoped>
#main-container {
  display: flex;
}

.input-container {
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 20px;
  width: 310px;
}

.input-container h3 {
  text-align: center;
  margin-bottom: 5px;
}

.input-container p.error {
  font-size: .85rem;
  text-align: left;
  color: red;
  margin-top: 7px;
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

#buttons-container {
  margin: 30px 5% 20px;
  display: flex;
  justify-content: flex-end;
}

button {
  color: var(--txt-primary-color);
  height: 40px;
  width: 75px;
  border: 0;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
  display: block;
}

#logout-btn {
  background-color: rgb(225, 0, 0);
  margin-right: 10px;
}

#save-btn {
  background-color: var(--bg-secondary-color);
}

@media (max-width: 1000px) {
  #main-container {
    flex-direction: column;
  }
  button {
    margin: 30px auto;
  }
}
</style>