<template>
  <div class="card mt-1 p-1">
      <h3>{{ title }}</h3>
      <span>Intervalo: {{ breaktime }}</span>
      <div class="clock" v-if="running" v-on:click="counterInitilizar()">
        <div v-if="timerPlay">{{totalTimer}}</div>
        <span v-if="!timerPlay" >Iniciar</span>
      </div>
      <div class="footer wrapper two-column mt-2">
        <button class="btn" v-on:click="exercises()">Exercicios</button>
        <button class="btn" v-on:click="workoutAction()" >{{(running)?'Finalizar':'Iniciar'}}</button>
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
