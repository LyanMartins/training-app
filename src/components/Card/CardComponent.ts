import { useAuthStore } from "@/stores/authStore";
import { useExercisesStore } from "@/stores/exercisesStore";
import { useWorkoutStore } from "@/stores/workoutStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  props: {
    title: String,
    breaktime: Number,
    workoutId: String,
    running: Boolean
  },

  data() {
    return  {
      timerPlay: false,
      totalTimer: 0
    }
  },

  methods: {
    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    },

    exercises(){
      useWorkoutStore().$state.workoutId = this.workoutId??'';
      this.$router.push({ name:"Exercises"});
    },

    workoutAction(){
      if(this.running){
        alert('finalizando')
      }else{
        alert('inicializando')
      }
    },

    counterInitilizar()
    {
      this.timerPlay = true;
      this.totalTimer = this.breaktime??30;
      this.timeout()
      
    },

    timeout() {
      setTimeout(()=>{
        this.totalTimer--;
        if(this.totalTimer != 0){
          this.timeout()
        }else{
          this.timerPlay = false
        }
      }, 1000)
    }

  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
