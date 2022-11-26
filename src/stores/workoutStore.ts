import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./authStore";

export const useWorkoutStore = defineStore("workout", {
  
  state: () => {
    return {
      workoutId: '',
      workout: [],
      error: {},
      config: {
        headers: {
          Authorization: 'Bearer ' + useAuthStore().user.token //the token is a variable which holds the token
        }
      }
    };
  },
  getters: {
    getWorkout(state):any{ 
      return state.workout;
    }
    
  },
  actions: 
  {
    async listWorkout(userId: string) 
    {
      return await axios
        .get(`http://localhost:3000/workout/user/${useAuthStore().user.id}/list`, this.$state.config)
        
        .then((response) => {
          this.$state.workout = response.data;
        })
        .catch((err) => {
          this.$state.error = err;
        });
    },

    async getExercisesByWorkoutId() 
    {
      return await axios
        .get(`http://localhost:3000/workout/${this.$state.workoutId}/exercises`, this.$state.config)
        .then((response) => {
          console.log(response.data)
          this.$state.workout = JSON.parse(JSON.stringify(response.data));
        })
        .catch((err) => {
          this.$state.error = err;
        });
    }

  },
});
