<template>
  <NavBar />

  <div class="container">
    <div class="back-botton" v-on:click="goBack()">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M28 34.2 17.8 24 28 13.75l.8.8L19.4 24l9.4 9.4Z"/></svg>
      <span>Voltar</span>
    </div>
    <div class="box">
      <ul v-for="(value, key) in exercises">
        <li>
          
          <hr v-if="(key !=0 )" class="mt-1">
          <div class="mt-2">
            <h3>{{value.title}} </h3>
            <div class="mt-1 wrapper two-column">
              <span><strong> Serie:</strong> {{value.serie}}</span>
              <span><strong> Repetiçoes:</strong> {{value.repetition}}</span>
            </div>
            <button class="btn btn-row mt-1">Detalhes</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
  
</template>

<script lang="ts">
  import ExercisesComponent from './ExercisesComponent';
  export default ExercisesComponent;
</script>

<style lang="scss">
  @import "./Exercises.scss";
</style>
