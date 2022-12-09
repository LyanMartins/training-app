import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import Card from "@/components/Card/Card.vue";
import Skeleton from "@/components/Skeleton/Skeleton.vue";
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useWorkoutStore } from "@/stores/workoutStore";
import { useRunningStore } from "@/stores/runningStore";

export default defineComponent({
  components: {
    NavBar,
    Skeleton,
    Card,
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },

  setup() {
    // initialize the store
    const authStore = useAuthStore()
    return {authStore}
  },

  data() {
    return {
      user: useAuthStore().getUser,
      workouts: [],
      running:{}
      
    };
  },

  watch: {
    // user() {
    //   useWorkoutStore().listWorkout(useAuthStore().user.id);
    // }
  },

  methods: {
    orderTraining() {

      this.workouts.forEach((element,index) => {
        if(element.id == this.running.workoutId){
          this.workouts[index]['running'] = true;
          return;
        }

        this.workouts[index]['running'] = false;

      });
      
    }
  },

  async mounted() {
    await useWorkoutStore().listWorkout(useAuthStore().user.id);
    await useRunningStore().getRunning(useAuthStore().user.id);
    this.workouts = useWorkoutStore().workout
    this.running = useRunningStore().running
    this.orderTraining()
  },
});
