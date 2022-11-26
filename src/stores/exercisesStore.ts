import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./authStore";

export const useExercisesStore = defineStore("exercises", {
  
  state: () => {
    return {
      exerciseId:'',
      error:[],
      config: {
        headers: {
          Authorization: 'Bearer ' + useAuthStore().user.token //the token is a variable which holds the token
        }
      }
    };
  },
  actions: 
  {
    
  },
});
