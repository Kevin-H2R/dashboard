<template>
  <v-card>
    <v-card-title>WOD</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate />
      </v-container>
      <v-container v-else>
        <v-row>
          <h2 class="mb-5 text-decoration-underline">{{ title }}</h2>
        </v-row>
        <v-row>
          <div v-html="description" />
        </v-row>
        <v-row class="mb-7">
          <v-divider />
        </v-row>
        <crossfit-login v-show="$store.getters.login === null" />
        <v-row v-show="$store.getters.login !== null && !$store.getters.registered">
          <v-col cols="4">
            <register-button :time="7" />
          </v-col>
          <v-col cols="4">
            <register-button :time="8" />
          </v-col>
          <v-col cols="4">
            <register-button :time="9" />
          </v-col>
        </v-row>
        <v-row
          justify="center"
          v-show="$store.getters.login !== null && $store.getters.registered"
        >
          <v-col cols="10" class="text-center">
            <div>Booked at {{ $store.getters.time }}pm.</div>
            <v-btn color="warning" @click="cancel()">Cancel</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
import RegisterButton from "./RegisterButton.vue";
import CrossfitLogin from "./CrossfitLogin.vue";
export default {
  name: "wod-container",
  components: { RegisterButton, CrossfitLogin },
  created() {
    const that = this;
    axios
      .get(process.env.VUE_APP_HOST + ":3000/crossfit", {withCredentials: true})
      .then(function (response) {
        that.title = response.data.title;
        that.description = response.data.description;
        that.loading = false;
        if (response.data.login === 'kebinou') {
          that.$store.commit("setLogin", 'kebinou');
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    cancel: function () {
      axios
        .post(process.env.VUE_APP_HOST + ":3000/attendance/cancel", {
          time: this.$store.getters.time,
          login: this.$store.getters.login
        }, {withCredentials: true})
        .then(() => {
          this.$store.commit('setRegistered', false)
          this.$store.commit('setTime', null)
        });
    },
  },
  data() {
    return {
      loading: true,
      title: "",
      description: "",
      login: "",
      password: "",
    };
  },
};
</script>
<style lang="scss">
</style>