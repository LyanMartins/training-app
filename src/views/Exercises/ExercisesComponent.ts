import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import Card from "@/components/Card/Card.vue";
import { useWorkoutStore } from "@/stores/workoutStore";

export default defineComponent({
  components: {
  },

  setup() {    
  },

  data() {
    return {
      user: useAuthStore().user,
      workouts: []
      
    };
  },

  methods: {
  },

  async mounted() {
  },
});
