import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import Card from "@/components/Card/Card.vue";

export default defineComponent({
  components: {
    NavBar,
    Card
  },

  data() {
    return {
      user: useAuthStore().user
    };
  },

  methods: {
  },

  mounted() {

  },
});
