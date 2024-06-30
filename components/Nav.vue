<template>
    <nav>
      <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/recipes">Recipes</nuxt-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Nav'
  }
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 1rem;
    text-align: center;
  }
  
  nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  
  nav li {
    margin-right: 20px;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
  }
  
  nav a:hover {
    color: #ccc;
  }
  </style>