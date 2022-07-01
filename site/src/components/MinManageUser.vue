<template>
  <div id="min-manage-user-container">
    <div id="left">
      <p id="user-name">{{ userName }}</p>
      <p id="user-cpf">{{ userCPF }}</p>
      <p id="user-email">{{ userEmail }}</p>
    </div>
    <div id="right">
      <input
        type="checkbox"
        v-model="admin"
        name="user-admin"
        id="user-admin"
        @input="onInput"
      />
      <label for="user-admin">Admin</label>
    </div>
    <i class="fa-solid fa-trash-can" @click="onClick"></i>
  </div>
</template>


<script>
export default {
  name: 'MinManageUser',
  props: {
    admin: {
      default: false,
    },
    userName: {
      default: '',
    },
    userCPF: {
      default: '',
    },
    userEmail: {
      default: '',
    },
  },
  methods: {
    onInput() {
      this.$emit('adminUpdated', this.userEmail, !this.admin);
    },
    onClick() {
      this.$emit('userDeleted', this.userEmail);
    },
  },
};
</script>


<style scoped>
#min-manage-user-container {
  margin: 10px 20px 15px;
  height: 150px;
  width: 500px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
}

#left {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
}

#user-name {
  font-size: 1.5rem;
  margin-bottom: 5px;
}

#user-cpf {
  font-size: 1.3rem;
  font-weight: 600;
}

#user-email {
  font-size: 1.2rem;
  display: inline-block;
  margin-bottom: 5px;
}

#user-admin {
  margin-bottom: 5px;
  width: 20px;
}

.fa-trash-can {
  display: inline-block;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  color: var(--txt-terciary-color);
}
</style>