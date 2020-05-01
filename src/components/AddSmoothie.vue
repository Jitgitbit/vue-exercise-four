<template>
  <div class="add-smoothie container">
    <h2 class="center-align indigo-text">Add a New Smoothie Recipe</h2>
    <form @submit.prevent='addSmoothie'>
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name='title' v-model='title' placeholder="changing any data will require you to be logged in">
      </div>
      <div class='field' v-for="(ing, index) in ingredients" :key='index'>
        <label for="ingredient">Ingredient:</label>
        <input type="text" name='ingredient' v-model='ingredients[index]'>
        <i class="material-icons delete" @click='deleteIng(ing)'>delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient:</label>
        <input placeholder='write one ingredient and press tab, for each of the ingredients' type="text" name='add-ingredient' @keydown.tab.prevent='addIng' v-model='another'>
      </div>
      <div class="field center-align">
        <p class="red-text" v-if='feedback'>{{feedback}}</p>
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'
import firebase from 'firebase'

export default {
  name:'AddSmoothie',
  data(){
    return{
      title: null,
      another: null,
      ingredients:[],
      feedback: null,
      slug: null,
    }
  },
  methods:{
    addSmoothie(){
      console.log(this.title)
      if(this.title){
        this.feedback = null
        // create a slug !! before going to db !!
        this.slug = slugify(this.title, {
          replacement: '-',
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        })
        console.log(this.slug)
        db.collection('smoothies').add({
          title: this.title,
          ingredients: this.ingredients,
          slug: this.slug
        }).then(() => {
          this.$router.push({name:'Index'})             // Redirecting
        }).catch(err => {
          console.log(err)
        })
      }else{
        this.feedback = 'You must enter a smoothie title'
      }
    },
    addIng(){
      if(this.another){
        this.ingredients.push(this.another)
        console.log(this.ingredients)
        this.another = null
        this.feedback = null
      }else{
        this.feedback = 'You must enter a value to add an ingredient'
      }
    },
    deleteIng(ing){
      this.ingredients = this.ingredients.filter(ingredient => {
        return ingredient != ing
      })
    }
  }
}
</script>
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
.add-smoothie{
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-smoothie h2{
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field{
  margin: 20px auto;
  position: relative;
}
.add-smoothie .delete{
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  font-size: 1.4em;
  cursor: pointer;
}
</style>