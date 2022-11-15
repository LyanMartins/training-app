<template>
  <form v-on:submit.prevent="onSubmit" class="mt-5 grid">
    <!-- <label for="">Login</label> -->
    <div>
      <img src="../../assets/logo.png" class="login-logo-img" alt="">
    </div>
    <input 
      class="input input-row mt-1" 
      :class="{hasError: hasError}" type="e-mail" v-model="login.email" id="" required placeholder="Email">
    <input class="input input-row mt-1" type="password" v-model="login.password" name="password" required placeholder="Senha">
    <div class="warning-alert mt-2" v-if="hasError">
      <span class="icon"></span>
      <span class="close">x</span>
      <label for="">{{errorMsg}}</label>
        
    </div>
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
