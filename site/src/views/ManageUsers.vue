<template>
  <div id="manage-users-container">
    <PageLocation :location="location"/>
    <h2>{{h2Content}}</h2>
    <h3>{{h3Content}}</h3>
    <ul id="products">
      <li v-for="user in users" :key="user.id">
        <MinManageUser :userName="user.name" :userCPF="user.cpf" :userEmail="user.email" :admin="user.admin"/>
      </li>
    </ul>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue'
import MinManageUser from '../components/MinManageUser.vue'
export default {
  name: 'ManageUsers',
  components: {
    PageLocation,
    MinManageUser,
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
    users: {
      default: [
        { id: 0, name: 'Usuário 1', cpf: '123.456.789-10', email: 'email.inventado1@gmail.com', admin: true},
        { id: 1, name: 'Usuário 2', cpf: '123.456.789-10', email: 'email.inventado2@gmail.com', admin: false},
        { id: 2, name: 'Usuário 3', cpf: '123.456.789-10', email: 'email.inventado3@gmail.com', admin: false},
        { id: 3, name: 'Usuário 4', cpf: '123.456.789-10', email: 'email.inventado4@gmail.com', admin: true},
        { id: 4, name: 'Usuário 5', cpf: '123.456.789-10', email: 'email.inventado5@gmail.com', admin: true},
        { id: 5, name: 'Usuário 6', cpf: '123.456.789-10', email: 'email.inventado6@gmail.com', admin: true},
        { id: 6, name: 'Usuário 7', cpf: '123.456.789-10', email: 'email.inventado7@gmail.com', admin: false},
        { id: 7, name: 'Usuário 8', cpf: '123.456.789-10', email: 'email.inventado8@gmail.com', admin: false},
        { id: 8, name: 'Usuário 9', cpf: '123.456.789-10', email: 'email.inventado9@gmail.com', admin: false},
        { id: 9, name: 'Usuário 10', cpf: '123.456.789-10', email: 'email.inventado10@gmail.com', admin: false},
      ]
    }
  }
}
</script>


<style scoped>
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

#users {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>