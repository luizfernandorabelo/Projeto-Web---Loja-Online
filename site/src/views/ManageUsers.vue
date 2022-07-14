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
          @userDeleted="excludeUser"
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
  async created() {
    this.users = await this.getUsers();
  },
  methods: {
    async updateAdmin(userEmail, admin) {
      this.users = await this.getUsers();
      const updatedUser = this.users.find(
        (user) => user.personalInfo.email === userEmail
      );
      updatedUser.admin = admin;
      await this.putUser(updatedUser);
      // localStorage.setItem('users', JSON.stringify(this.users));
    },
    async excludeUser(userEmail) {
      if (confirm('Clique em OK para confirmar a exclusão de usuário')) {
        // this.users = this.users.filter(
        //   (user) => user.personalInfo.email !== userEmail
        // );
        // localStorage.setItem('users', JSON.stringify(this.users));
        this.users = await this.getUsers();
        const deletedUser = this.users.find(
          (user) => user.personalInfo.email === userEmail
        );
        await this.deleteUser(deletedUser);
      }
    },
    async getUsers() {
      const response = await fetch('http://localhost:3000/users');
      const users = await response.json();
      return users;
    },
    async putUser(user) {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const updated = await response.json();
      return updated;
    },
    async deleteUser(user) {
      const response = await fetch(`http://localhost:3000/users/${user.id}`, {
        method: 'DELETE',
      });
      this.users = await this.getUsers();
      return response;
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