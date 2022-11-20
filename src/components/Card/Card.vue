<template>
  <div class="card mt-1 p-1">
      <h3>{{ title }}</h3>
      <span>Intervalo: {{ breaktime }}</span>
      
      <div class="footer wrapper two-column">
        <button class="btn" v-on:click="exercises('u')">Exercicios</button>
        <button class="btn">Finalizar</button>
      </div>
  </div>
</template>

<script lang="ts">
  import CardComponent from './CardComponent';
  export default CardComponent;
</script>

<style lang="scss">
  @import "./Card.scss";
</style>
