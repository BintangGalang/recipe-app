<template>
    <div>
      <RecipeCard :recipe="recipe" />
    </div>
  </template>
  
  <script>
  import RecipeCard from '~/components/RecipeCard.vue'
  
  export default {
    async asyncData({ $axios, params }) {
      const response = await $axios.get(`https://example.com/api/recipes/${params.id}`)
      return {
        recipe: response.data
      }
    },
    components: { RecipeCard }
  }
  </script>