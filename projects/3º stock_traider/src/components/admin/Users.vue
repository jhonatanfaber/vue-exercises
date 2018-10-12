<template>
    <div class="users-container">
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Admin</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in users" :key="user.id">
                <th scope="row">{{index+1}}</th>
                <td>{{user.id}}</td>
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.admin ? 'Yes' : 'No'}}</td>
                <td> 
                    <i class="fas fa-pen fa-lg" ></i>
                    <i class="fas fa-trash-alt fa-lg" @click="deleteUser(user.id, index)"></i>
                 </td>
                </tr>
            </tbody>
            <NewUserModal v-if="showModal" @close="showModal = false"></NewUserModal>
            <button  id="show-modal" @click="showModal = true" class="btn btn-md"><i class="fas fa-plus"></i> Add User</button>
        </table>
    </div> 
</template>

<script>
import NewUserModal from "./NewUserModal.vue";
import mapActions from "vuex";

export default {
  data() {
    return {
      showModal: false
    };
  },
  methods: {
    deleteUser(id, index) {
        const userToDelete = {
            id,
            index
        }
      this.$store.dispatch("deleteUser", userToDelete);
    }
  },
  created() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  components: {
    NewUserModal
  }
};
</script>

<style scoped>
.users-container {
  display: flex;
  justify-content: center;
}

.table {
  width: 90%;
}

.fas{
    cursor: pointer;
}

.fa-pen {
  margin-right: 15px;
}

.fa-plus {
  color: white;
}

.btn {
  background-color: #212529;
  color: white;
}
</style>
