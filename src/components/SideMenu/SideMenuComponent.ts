import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props:{
    second: Boolean
  },

  data() {
    return {
      hiddenSideMenu: false
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

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
