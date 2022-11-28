import { useAuthStore } from "@/stores/authStore";
import { defineComponent, toHandlers } from "vue";
import SideMenu from "@/components/SideMenu/SideMenu.vue";

export default defineComponent({
  components: {
    SideMenu
  },

  props:{
    second: Boolean
  },

  data() {
    return {
      hiddenSideMenu: true
    };
  },

  methods: {
    openSideMenu(){
      this.hiddenSideMenu = !this.hiddenSideMenu;
    },

    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    }
  },

  
  watch:{
    // hiddenSideMenu(){
    //   console.log("watch")
    //   this.hiddenSideMenu = !this.hiddenSideMenu
    // }
  }, 

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
