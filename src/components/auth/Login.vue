<template>
  <div class="login container">
    <form class="card-panel" @submit.prevent="login">
      <h2 class="center indigo-text">Login</h2>
      <div class="field">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password">
      </div>
      <p class="red-text center" v-if="feedback">{{feedback}}</p>
      <div class="field">
        <button class="btn pink">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  name: 'Login',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,
    }
  },
  methods:{
    login(){
      if(this.email && this.password){
        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
        .then(cred => {
          this.$router.push({name:'Index'})
          console.log(`===========>> USER LOGGED IN:`,cred.user)
        }).catch(err => {
          this.feedback = err.message
        })
        this.feedback = null
      }else{
        this.feedback = 'Please fill in both fields'
      }
    }
  }
}
</script>

<style>
.login{
  margin-top: 60px;
  max-width: 400px;
}
.login h2{
  font-size: 2.4em;
}
.login .field{
  margin-bottom: 16px;
}
</style>