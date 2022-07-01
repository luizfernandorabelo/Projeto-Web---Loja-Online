<template>
  <div id="manage-users-container">
    <PageLocation :location="location" />
    <div id="main-container">
      <div id="users">
        <MinManageUser
          v-for="user in users"
          :key="user.id"
          :userName="user.personalInfo.name"
          :userCPF="user.personalInfo.CPF"
          :userEmail="user.personalInfo.email"
          :admin="user.admin"
          @adminUpdated="updateAdmin"
          @userDeleted="deleteUser"
        />
      </div>
    </div>
  </div>
</template>


<script>
import PageLocation from '../components/PageLocation.vue';
import MinManageUser from '../components/MinManageUser.vue';
export default {
  name: 'ManageUsers',
  components: {
    PageLocation,
    MinManageUser,
  },
  data() {
    return {
      location: [
        { id: 0, name: 'Home', path: '/' },
        { id: 1, name: 'Gerenciar Usuários', path: '/manageUsers' },
      ],
      users: [],
    };
  },
  created() {
    this.users = JSON.parse(localStorage.getItem('users'));
    console.log(this.users);
  },
  methods: {
    updateAdmin(userEmail, admin) {
      const updatedUser = this.users.find(
        (user) => user.personalInfo.email === userEmail
      );
      updatedUser.admin = admin;
      localStorage.setItem('users', JSON.stringify(this.users));
    },
    deleteUser(userEmail) {
      if (confirm('Clique em OK para confirmar a exclusão de usuário')) {
        this.users = this.users.filter(
          (user) => user.personalInfo.email !== userEmail
        );
        localStorage.setItem('users', JSON.stringify(this.users));
      }
    },
  },
};
</script>


<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 70vh;
  margin-top: 10px;
}

#users {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>