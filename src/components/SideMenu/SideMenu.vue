<template style="opacity: 0.5;">
  <div class="sidemenu"  :class="{ 'hidden': hiddenSideMenu }">
    
    <div class="close" v-on:click="closeSideMenu()">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.7 36.1-.8-.8L23.2 24 11.9 12.7l.8-.8L24 23.2l11.3-11.3.8.8L24.8 24l11.3 11.3-.8.8L24 24.8Z"/></svg>
    </div>
    <div class="profile mt-3">
      <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.4 35.45q2.75-1.8 5.5-2.875T24 31.5q3.35 0 6.1 1.075 2.75 1.075 5.55 2.875 2.1-2.2 3.375-5.1Q40.3 27.45 40.3 24q0-6.8-4.75-11.55Q30.8 7.7 24 7.7q-6.75 0-11.525 4.75T7.7 24q0 3.45 1.275 6.35 1.275 2.9 3.425 5.1ZM24 24.55q-2.4 0-4.025-1.625Q18.35 21.3 18.35 18.9q0-2.45 1.625-4.05 1.625-1.6 4.025-1.6 2.45 0 4.05 1.625 1.6 1.625 1.6 4.025 0 2.4-1.625 4.025Q26.4 24.55 24 24.55Zm0 16.85q-3.6 0-6.8-1.375Q14 38.65 11.675 36.3t-3.7-5.5Q6.6 27.65 6.6 24q0-3.6 1.375-6.775 1.375-3.175 3.725-5.55t5.5-3.725Q20.35 6.6 24 6.6q3.6 0 6.775 1.375 3.175 1.375 5.55 3.725t3.725 5.525Q41.4 20.4 41.4 24q0 3.6-1.375 6.8Q38.65 34 36.3 36.325t-5.525 3.7Q27.6 41.4 24 41.4Zm0-1.1q2.85 0 5.7-1.025t5-2.975q-2.15-1.7-4.875-2.7-2.725-1-5.825-1t-5.85.95q-2.75.95-4.8 2.75 2.15 1.95 4.975 2.975Q21.15 40.3 24 40.3Zm0-16.85q2 0 3.275-1.3t1.275-3.25q0-2-1.3-3.275T24 14.35q-1.95 0-3.25 1.3t-1.3 3.25q0 1.95 1.3 3.25t3.25 1.3Zm0-4.55Zm0 17.55Z"/></svg>    
      <div>
        <span>{{user.name}}</span>
      </div>
    </div>

    <ul class="mt-2">
        <li v-on:click="logout()">Sair</li>
      </ul>
  </div>

</template>

<script lang="ts">
  import SideMenuComponent from './SideMenuComponent';
  export default SideMenuComponent;
</script>

<style lang="scss">
  @import "./SideMenu.scss";
</style>
