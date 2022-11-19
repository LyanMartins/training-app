<template>
  <NavBar />
  <div class="container">
    <h1>Olá {{user.name}}</h1>
    <Card />
  </div>
  
</template>

<script lang="ts">
  import HomeComponent from './HomeComponent';
  export default HomeComponent;
</script>

<style lang="scss">
  @import "./Home.scss";
</style>
