<template>
    <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <h2> New User </h2>
          </div>

          <div class="modal-body">
           <div class="form-group username">
                <label for="exampleInputEmail1">Name: </label>
                <input type="text" v-model="username" class="form-control col-xs-4" :class="{invalidHighlight: invalidUser}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name">
            </div>
            <div class="form-group username">
                <label for="exampleInputEmail1">Username: </label>
                <input type="text" v-model="username" class="form-control col-xs-4" :class="{invalidHighlight: invalidUser}" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username">
            </div>
            <label for="exampleInputEmail1">Admin: </label>
            <input type="checkbox" v-model="isAdmin" aria-label="First name">
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button class="modal-default-button" @click="$emit('close')">
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
    
</template>
<script>
// TODO: get checkbox value --> TODO list github
export default {
    data(){
        return {
            showModal : false,
            isAdmin : false
        }
    }
    
}
</script>
<style scoped>
.form-control{
    margin-bottom: 15px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

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
