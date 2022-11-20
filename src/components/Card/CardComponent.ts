import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {
    title: String,
    breaktime: Number
  },

  data() {
    return  {}
  },

  methods: {
    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    },

    exercises(workoutId: String){
        this.$router.push("exercises");
    }
  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
