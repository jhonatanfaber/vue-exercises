<template>
    <div class="container">
        <form v-if="!submitted">
            <div class="row">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <!-- Exercise 1 -->
                    <!-- Create a Signup Form where you retrieve the following Information -->
                    <!-- Full Name (First Name + Last Name) -->
                    <!-- Mail -->
                    <!-- Password -->
                    <!-- Store Data? Yes/No -->

                    <!-- Exercise 2 -->
                    <!-- Only display the Form if it has NOT been submitted -->
                    <!-- Display the Data Summary ONCE the Form HAS been submitted -->

                    <!-- Exercise 3 -->
                    <!-- Edit the Example from above and create a custom "Full Name" Control -->
                    <!-- which still holds the First Name and Last Name Input Field -->
                    <h1> Form: </h1>
                    <form>
                            <div class="col">
                                <input type="text" v-model="firstName" class="form-control" placeholder="First name">
                            </div>
                            <div class="col">
                                <input type="text" v-model="lastName" class="form-control" placeholder="Last name">
                            </div>
                            <div class="col">
                                <input type="text" v-model="mail" class="form-control" placeholder="Mail">
                            </div>
                            <div class="col">
                                <input type="text" v-model="password" class="form-control" placeholder="Password">
                            </div>
                            <div class="input-group col">
                            <label> Store data? </label>
                                <input type="radio" v-model="storeData" value="Yes" aria-label="Radio button for following text input">
                                <p> YES</p>
                                <input type="radio" v-model="storeData" value="No" aria-label="Radio button for following text input">
                                <p> NO</p>
                            </div>
                            <div class="col">
                                <button class="btn btn-primary" @click.prevent="submitted= true"> Submit</button>
                            </div>
                    </form>
                </div>
            </div>
        </form>
        <hr>
        <div class="row" v-if="submitted">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h4>Your Data</h4>
                    </div>
                    <div class="panel-body">
                        <FullName :firstName="firstName" :lastName="lastName"/>
                        <p>Mail: {{mail}} </p>
                        <p>Password: {{password}} </p>
                        <p>Store in Database?: {{storeData}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FullName from "./components/FullName.vue"

export default {
    data(){
        return {
            firstName : "",
            lastName : "",
            mail : "",
            password : "",
            storeData : "No",
            submitted: false
        }
    },
    components: {
        FullName
    }
};
</script>

<style scoped>
.panel{
    margin-top: 50px;
}

.form-control,
.input-group{
    margin-top: 20px
}
</style>
