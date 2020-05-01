<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link :to="{name: 'Index'}">
          <span class="nav-title">PhoenixSmoothies</span>
        </router-link>
        <ul class="right">
          <li><router-link :to="{name:'Signup'}" v-if="!user">Signup</router-link></li>
          <li><router-link :to="{name:'Login'}" v-if="!user">Login</router-link></li>
          <li v-if="user"><a>{{user.email}}</a></li>
          <li><a href="" @click="logout" v-if="user">Logout</a></li>
        </ul>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{name: 'AddSmoothie'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name:'Navbar',
  data(){
    return{}
  }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
</style>