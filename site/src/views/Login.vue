<template>
  <div id="login-container">
    <PageLocation :location="location" />
    <div id="main-container">
      <div id="sign-in-container">
        <h2>Já sou Cadastrado</h2>
        <div id="input-container">
          <p id="email-password-label">Informe seu e-mail e senha de cadastro</p>
          <p class="error" v-if="errorMessage"> {{ errorMessage }}</p>
          <input class="input" type="text" name="email" id="email" placeholder="Email" v-model="emailInput">
          <input class="input" type="password" name="password" id="password" placeholder="Senha" v-model="passwordInput" v-on:keyup.enter="authenticate">
          <button id="sign-in-btn" @click="authenticate">Entrar</button>
        </div>
        <p id="forgot-password-p">Esqueci minha senha</p>
      </div>
      <div id="sign-up-container">
        <div>
          <h2>É minha primeira compra</h2>
          <router-link to="/create-account"><button id="sign-up-btn">Cadastre-se</button></router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
export default {
  name: 'Login',
  components: {
    PageLocation,
  },
  data() {
    return {
      location: [
        {'name': 'Home', 'id': 0, 'path': '/'},
        {'name': 'Login', 'id': 1, 'path': '/login'},
      ],
      emailInput: '',
      passwordInput: '',
      errorMessage: '',
    }
  },
  methods: {
    authenticate() {
      this.errorMessage = ''
      for (let existingUser of userData.users) {
        if (existingUser.email === this.emailInput && existingUser.password === this.passwordInput) {
          localStorage.setItem('userID', existingUser.id)
          window.location.href = '/'
          return
        }
      }
      this.errorMessage = 'Email ou senha incorretos'
    }
  },
}
</script>


<style scoped>
#main-container {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 40px;
}

h2 {
  font-size: 1.3rem;
  font-weight: 500;
}

#input-container {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 10px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
  width: 310px;
}

#email-password-label {
  margin: 20px 0;
}

#input-container .error {
  color: red;
  font-size: .9rem;
  margin-bottom: 5px;
}

.input {
  border: 1px solid var(--txt-terciary-color);
  border-radius: 5px;
  height: 25px;
  width: 100%;
  margin: 10px auto;
  padding: 0 10px;
  box-sizing: border-box;
}

button {
  background-color: var(--bg-secondary-color);
  color: var(--txt-primary-color);
  height: 40px;
  border: 0;
  border-radius: 10px;
  margin: auto;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;
  box-sizing: border-box;
}

#sign-in-btn {
  width: 75px;
  margin-bottom: 5px;
  margin-top: 5px;
}

#sign-up-btn {
  width: 110px;
  margin-top: 20px;
  margin-bottom: 40px;
}

#forgot-password-p {
  text-align: left;
  margin: 5px 15px;
  color: var(--txt-secondary-color);
  margin-top: 10px;
}

#sign-up-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media (max-width: 700px) {
  #main-container {
    flex-direction: column;
    margin-bottom: 0;
  }

  #forgot-password-p {
    margin-left: 5px 0;
    text-align: center;
  }

  #sign-up-container {
    margin-top: 30px;
  }
}
</style>