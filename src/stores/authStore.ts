import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      user: JSON.parse(localStorage.getItem("user") ?? ""),
      error: {},
    };
  },
  actions: {
    async login(loginForm: any) {
      return await axios
        .post("http://localhost:3000/login", loginForm)
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
