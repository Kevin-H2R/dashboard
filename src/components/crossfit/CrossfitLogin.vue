<template>
  <v-form @submit.prevent="loginClick()">
    <v-container>
      <v-row v-show="$store.getters.cookie === null">
        <v-col>
          <v-row justify="space-between">
            <v-text-field
              class="flex-grow-0"
              v-model="login"
              label="Login"
              outlined
              dense
              hide-details
            />
            <v-text-field
              class="flex-grow-0"
              v-model="password"
              label="Password"
              type="password"
              outlined
              dense
              hide-details
            />
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="10">
              <v-btn width="100%" type="submit" color="primary" @click="loginClick()">
                Login
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import axios from "axios";
export default {
  name: "crossfit-login",
  methods: {
    loginClick: function () {
      axios
        .post("http://" + process.env.VUE_APP_HOST + ":3000/crossfit/login", {
          login: this.login,
          password: this.password,
        })
        .then((res) => {
          this.$store.commit("setLogin", this.login);
          this.$store.commit("setCookie", res.data.cookie);
          this.$store.commit("setRegistered", res.data.registered);
          this.$store.commit("setTime", res.data.time);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  data() {
    return {
      login: "",
      password: "",
    };
  },
};
</script>
<style lang="scss">
</style>