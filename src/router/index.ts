import Login from "@/views/Login/Login.vue";
import Home from "@/views/Home/Home.vue";
import Exercises from "@/views/Exercises/Exercises.vue";


import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/exercises",
      name: "Exercises",
      component: Exercises,
      props: true,
    },
  ],
});

export default router;
