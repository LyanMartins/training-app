import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./authStore";

export const useWorkoutStore = defineStore("workout", {
  
  state: () => {
    return {
      workout: [],
      error: {},
    };
  },
  actions: 
  {
    async getWorkout(userId: string) 
    {
      let config = {
        headers: {
          Authorization: 'Bearer ' + useAuthStore().user.token //the token is a variable which holds the token
        }
      }
      return await axios
        .get(`http://localhost:3000/workout/user/${useAuthStore().user.id}/list`, config)
        
        .then((response) => {
          this.$state.workout = response.data;
        })
        .catch((err) => {
          this.$state.error = err;
        });
    },

  },
});
