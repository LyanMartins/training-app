<template>
  <SideMenu />
  

  <nav class="top-navbar wrapper third-column-center">
    <i v-on:click="openSideMenu()">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.5 17.275v-1h17v1Zm0-4.775v-1h17v1Zm0-4.775v-1h17v1Z"/></svg>
    </i>
    <span></span>
    <i v-on:click="logout()">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.8 21q-.675 0-1.138-.462-.462-.463-.462-1.163V5.625q0-.7.462-1.162Q5.125 4 5.8 4h6.425v1H5.8q-.225 0-.412.188-.188.187-.188.437v13.75q0 .25.188.437.187.188.412.188h6.425v1Zm10.475-4.95-.7-.725 2.3-2.325h-8.65v-1h8.65l-2.3-2.325.7-.725L19.8 12.5Z"/></svg>
    </i>
  </nav>


</template>

<script lang="ts">
  import NavBarComponent from './NavBarComponent';
  export default NavBarComponent;
</script>

<style lang="scss">
  @import "./NavBar.scss";
</style>
