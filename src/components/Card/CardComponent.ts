import { useAuthStore } from "@/stores/authStore";
import { useExercisesStore } from "@/stores/exercisesStore";
import { useWorkoutStore } from "@/stores/workoutStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {
    title: String,
    breaktime: Number,
    workoutId: String
  },

  data() {
    return  {}
  },

  methods: {
    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    },

    exercises(){
      console.log(this.workoutId)
      useWorkoutStore().$state.workoutId = this.workoutId??'';
      this.$router.push({ name:"Exercises"});
    }
  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
