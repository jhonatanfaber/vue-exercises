<template>
    <ul class="nav nav-pills">
        <router-link to="/" tag="li" active-class="active" exact><a> Home </a></router-link>
        <router-link to="/user/1" tag="li" active-class="active" exact><a> User 1 </a></router-link>
        <router-link to="/user/2" tag="li" active-class="active" exact><a> User 2 </a></router-link>

        <router-link to="/hello/jhoni" tag="li" active-class="active" exact><a>props true </a></router-link>
        <router-link to="/static" tag="li" active-class="active" exact><a>static </a></router-link>
        <router-link to="/dynamic/2" tag="li" active-class="active" exact><a>dynamic </a></router-link>
    </ul>
</template>
