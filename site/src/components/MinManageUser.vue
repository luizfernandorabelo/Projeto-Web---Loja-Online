<template>
  <div id="min-manage-user-container">
    <router-link to="/manageUser">
      <div id="left">
        <p id="user-name">{{userName}}</p>
        <p id="user-cpf">{{userCPF}}</p>
        <p id="user-email">{{userEmail}}</p>
      </div>

      <div id="right">
        <input type="checkbox" v-model="user.admin" id="user-admin">
        <label for="admin">Admin</label>
        <i id="fa-solid fa-trash-can"></i>
      </div>
    </router-link>
  </div>
</template>


<script>
export default {
  data() {
    return {
      user: {
        admin: false,
      }
    };
  },
  name: 'MinManageUser',
  props: {
    userName: {
      default: 'Usuário',
    },
    userCPF: {
      default: "123.456.789-10",
    },
    userEmail: {
      default: "email.inventado@gmail.com",
    },
    trashCan: {
      default: 'fa-trash-can',
    }  
  }
}
</script>


<style scoped>
#min-manage-user-container {
  margin: 10px 20px 15px;
  height: 170px;
  width: 500px;
  text-align: justify;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
}

#left {
  float: left;
}

#right {
  float: right;
}

#user-name {
  font-size: 28px;
  margin-bottom: 5px;
}

#user-cpf {
  font-size: 28px;
  font-weight: 600;
}

#user-email {
  font-size: 28px;
  display: inline-block;
  margin-bottom: 5px;
}

#user-admin {
  margin-bottom: 5px;
  width: 20px;
}

#fa-trash-can {
  display: inline-block;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>