import { useAuthStore } from "@/stores/authStore";
import { defineComponent, toRaw } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import Card from "@/components/Card/Card.vue";
import { useWorkoutStore } from "@/stores/workoutStore";
import { useExercisesStore } from "@/stores/exercisesStore";

export default defineComponent({
  components: {
    NavBar
  },

  props: {
    workoutId:String
    
  },
  setup() {
    // initialize the store
    const authStore = useAuthStore()
    const workoutStore = useWorkoutStore()
    return {authStore, workoutStore }
  },

  data() {
    return {
      user: useAuthStore().user,
      exercises: {}
      
    };
  },

  watch:{
    exercises() {
    }
  },

  methods: {
    goBack() {
      return this.$router.push("home");
    }

  },

  async mounted() {
    await this.workoutStore.getExercisesByWorkoutId()
    this.exercises = this.workoutStore.getWorkout.Exercises
  },
});
