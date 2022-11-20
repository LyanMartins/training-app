<template>
  <NavBar />
  <div class="container">
    <h1>Olá {{user.name}}</h1>
    <div v-if="!workouts || workouts.length == 0" class="mt-1">
      <Skeleton height="200px" width="100%"/>
    </div>
    <div v-for="workout in workouts">
      <Card :title="workout.title" :breaktime="workout.breakTime" />
    </div>
  </div>
  
</template>

<script lang="ts">
  import HomeComponent from './HomeComponent';
  export default HomeComponent;
</script>

<style lang="scss">
  @import "./Home.scss";
</style>
