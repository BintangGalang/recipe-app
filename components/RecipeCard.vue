<template>
    <div class="recipe-card">
      <h2>{{ recipe.name }}</h2>
      <p>Cooking Time: {{ recipe.cookingTime }}</p>
      <p>Ingredients:</p>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.id">
          {{ ingredient.name }} ({{ ingredient.quantity }})
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      recipe: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  .recipe-card {
    background-color: #f7f7f7;
    padding: 1rem;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    margin-top: 0;
  }
  
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-bottom: 10px;
  }
  </style>