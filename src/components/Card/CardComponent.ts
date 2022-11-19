import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  data() {
    return {
    };
  },

  methods: {

  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
