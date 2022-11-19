import { defineStore } from "pinia";
import axios from "axios";

export const useWorkoutStore = defineStore("workout", {
  state: () => {
    return {
      workout: [],
      error: {},
    };
  },
  actions: {
    async getWorkout(userId: string) {
      return await axios
        .post("http://localhost:3000/login", userId)
        .then((response) => {
          localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch((err) => {
          this.$state.error = err;
        });
    },

    logout() {
      localStorage.removeItem("user");
      window.location.href = "/";
    },
  },
});
