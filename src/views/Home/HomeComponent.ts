import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import Card from "@/components/Card/Card.vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useWorkoutStore } from "@/stores/workoutStore";

export default defineComponent({
  components: {
    NavBar,
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  data() {
    return {
      user: useAuthStore().user
    };
  },

  methods: {
  },

  mounted() {
    console.log(useAuthStore().user.id);
    useWorkoutStore().getWorkout(useAuthStore().user.id)
  },
});
