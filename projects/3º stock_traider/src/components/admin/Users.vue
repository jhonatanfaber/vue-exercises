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
                    <i class="fas fa-edit fa-lg"></i>
                    <i class="fas fa-trash-alt fa-lg"></i>
                 </td>
                </tr>
            </tbody>
            <i class="fas fa-plus fa-3x"></i>
        </table>
    </div> 
</template>

<script>
import mapState from "vuex";
export default {
  created() {
    this.$store.dispatch("getUsers")
  },
  computed: {
    users(){
        return this.$store.state.users
    }
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

.fas.fa-edit{
margin-right: 15px;
}

.fa-plus{
    margin-top: 30%;;
}
</style>
