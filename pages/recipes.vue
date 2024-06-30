<template>
    <div>
      <h1>Recipes</h1>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <nuxt-link :to="`/recipes/${recipe.id}`">{{ recipe.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    async asyncData({ $axios }) {
      const response = await $axios.get('https://example.com/api/recipes')
      return {
        recipes: response.data
      }
    }
  }
  </script>