import { defineStore } from "pinia";
import axios from "axios";
import { useAuthStore } from "./authStore";

export const useRunningStore = defineStore("running", {
  
  state: () => {
    return {
      running: [],
      error: {},
      config: {
        headers: {
          Authorization: 'Bearer ' + useAuthStore().user.token //the token is a variable which holds the token
        }
      }
    };
  },
  getters: {
    
    
  },
  actions: 
  {
    async getRunning(userId: string) 
    {
      return await axios
        .get(`http://localhost:3000/running/${useAuthStore().user.id}`, this.$state.config)
        
        .then((response) => {
          this.$state.running = response.data;
        })
        .catch((err) => {
          this.$state.error = err;
        });
    },
  },
});
