<template>
  <div id="manage-users-container">
    <PageLocation :location="location" />
    <div id="main-container">
      <div id="users">
        <MinManageUser
          v-for="user in users"
          :key="user.id"
          :userName="user.name"
          :userCPF="user.cpf"
          :userEmail="user.email"
          :admin="user.admin"
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
};
</script>


<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 55vh;
}

#users {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  list-style-type: none;
}
</style>