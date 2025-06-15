import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    token: "",
    user: "",
  }),
  actions: {
    login(data: { token: string; user: string }) {
      this.token = data.token;
      this.user = data.user;
      localStorage.setItem("token", data.token);
    },
    logout() {
      this.token = "";
      this.user = "";
      localStorage.removeItem("token");
    },
  },
});
