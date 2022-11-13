<template>
  <form v-on:submit.prevent="onSubmit" class="mt-5">
    <label for="">Login</label>
    <input 
      class="input input-row mt-1" 
      :class="{hasError: hasEmailInvalid}" type="e-mail" v-model="login.email" id="" required placeholder="Email">
    <input class="input input-row mt-1" type="password" name="password" required placeholder="Senha">
    <div class="text-center mt-1"><a href="" class="">Esqueci minha senha</a></div>
    <button  class="btn btn-row mt-1"> Entrar</button>
  </form>
</template>

<script lang="ts">
import LoginComponent from './LoginComponent';
export default LoginComponent;
</script>

<style lang="scss" >
@import "./Login.scss";
</style>
