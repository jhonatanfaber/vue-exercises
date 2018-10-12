<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="header">
             <h3> New User </h3>
            <i class="fas fa-times fa-2x" @click="closeModel"></i>
          </div>

          <div class="body">
           <div class="form-group">
                <label for="inputName">Name </label>
                <input type="text" v-model="name" class="form-control col-sm-6"  id="inputName" placeholder="Enter name">
            </div>
            <div class="form-group">
                <label for="inputUsername">Username </label>
                <input type="text" v-model="username" class="form-control col-sm-6" id="inputUsername" placeholder="Enter username">
            </div>
            <div class="form-group">
                <label for="inputPassword">Password </label>
                <input type="password" v-model="password" class="form-control col-sm-6" id="inputPassword" placeholder="Enter password">
            </div>
            <div class="form-group">
              <label> Admin </label>
              <input type="checkbox" v-model="isAdmin">
            </div>
          </div>

          <div class="footer">
              <label class="btn btn-dark" @click="createNewUser"> Create </label>
          </div>
        </div>
      </div>
    </div>
  </transition>
    
</template>
<script>
// TODO: get checkbox value --> TODO list github
export default {
  data() {
    return {
      name : "",
      username : "",
      password : "",
      isAdmin: false
    };
  },
  methods : {
    createNewUser(){
      const newUser = {
        name : this.name,
        username : this.username,
        password : this.password,
        admin : this.isAdmin
      }
      this.$store.dispatch("createUser", newUser)
      this.closeModel();
    },
    closeModel(){
      this.$emit("close")
    }
  }
};
</script>
<style scoped>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px ;
  padding-left: 5%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.header h3 {
  margin-bottom: 7%;
  color: #070707;
  font-weight: bold;
}

.header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.fa-times{
  padding-top: 15px;
  padding-right: 20px;
  cursor: pointer;
}

.body {
  margin: 20px 0;
}

.btn:hover {
color: #fff;
}

.footer {
  margin-bottom: 10%;
  display: flex;
  justify-content: flex-start;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
