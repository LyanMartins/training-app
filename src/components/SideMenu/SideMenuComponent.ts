import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props:{
    hiddenSideMenuProps: Boolean
  },

  data() {
    return {
      hiddenSideMenu: this.hiddenSideMenuProps
    };
  },

  methods: {

    closeSideMenu(){
      this.hiddenSideMenu = true;
    },

    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    }
  },

  watch:{
    hiddenSideMenu(){
      this.closeSideMenu();
      this.hiddenSideMenu = !this.hiddenSideMenuProps
    }
  }, 
  mounted() {
    this.hiddenSideMenu = true;
    this.hiddenSideMenu = this.hiddenSideMenuProps
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
