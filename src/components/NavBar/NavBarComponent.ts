import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";
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

    openSideMenu()
    {
      this.hiddenSideMenu = false;
    },


    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    }
  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
