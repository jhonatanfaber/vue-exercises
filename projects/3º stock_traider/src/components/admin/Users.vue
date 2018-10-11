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
                    <i class="fas fa-pen fa-lg"></i>
                    <i class="fas fa-trash-alt fa-lg"></i>
                 </td>
                </tr>
            </tbody>
            <NewUserModal v-if="showModal" @close="showModal = false">
                 <!-- <h3 slot="header">custom header</h3> -->
            </NewUserModal>
            <button  id="show-modal" @click="showModal = true" class="btn btn-lg"><i class="fas fa-plus"></i> Add User</button>
        </table>
    </div> 
</template>

<script>
import mapState from "vuex";
import NewUserModal from "./NewUserModal.vue"
export default {
    data(){
        return {
            showModal : false
        }
    },
  created() {
    this.$store.dispatch("getUsers")
  },
  computed: {
    users(){
        return this.$store.state.users
    }
  },
  components : {
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

.fa-pen{
margin-right: 15px;
}

.fa-plus{
    color: white;
}

.btn{
    background-color: #212529;
    color: white;
}
</style>
