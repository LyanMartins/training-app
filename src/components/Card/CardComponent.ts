import { useAuthStore } from "@/stores/authStore";
import { defineComponent } from "vue";

export default defineComponent({
  components: {},

  data() {
    return  {
      "id": "19816e7d-5893-4192-9fc7-0a02bb936a5a",
      "userId": "7a2a0eb1-e267-4751-bfe0-7b348d02d175",
      "title": "Treino A",
      "breakTime": 30,
      "created": "2022-08-15T00:05:31.575Z",
      "modifield": null,
      "deleted": null,
      "Exercises": [
          {
              "id": "b27f2e08-de20-4580-a1c8-629b652bb4cf",
              "workoutId": "19816e7d-5893-4192-9fc7-0a02bb936a5a",
              "title": "Supino Barra Livre",
              "serie": 4,
              "repetition": 12,
              "created": "2022-08-15T00:09:27.813Z",
              "modifield": null,
              "deleted": null,
              "workout_id": "19816e7d-5893-4192-9fc7-0a02bb936a5a"
          },
          {
              "id": "fdfb64b1-cef9-44ec-b5f5-2b2baab5922c",
              "workoutId": "19816e7d-5893-4192-9fc7-0a02bb936a5a",
              "title": "Supino Barra Livre Teste",
              "serie": 3,
              "repetition": 15,
              "created": "2022-11-02T19:37:28.382Z",
              "modifield": "2022-11-02T19:37:28.382Z",
              "deleted": null,
              "workout_id": "19816e7d-5893-4192-9fc7-0a02bb936a5a"
          }
      ]
  };
  },

  methods: {
    logout(){
      const authStore = useAuthStore();
      authStore.logout();
    }
  },

  mounted() {
    if (!useAuthStore().user) {
      this.$router.push("");
    }
  },
});
