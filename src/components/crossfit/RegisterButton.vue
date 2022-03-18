<template>
  <v-hover>
    <template v-slot:default="{ hover }">
      <v-card color="primary"
        @click="register(time)"
        class="transition-swing"
        :elevation="hover ? 24 : 6">
        <v-card-text class="text-center"> Register {{ time }}pm class </v-card-text>
      </v-card>
    </template>
  </v-hover>
</template>
<script>
import axios from "axios";
export default {
  name: "register-button",
  props: {
    time: {
      type: Number,
      required: true,
    },
  },
  methods: {
    register: function (time) {
      axios
        .post(
          "http://" + process.env.VUE_APP_HOST + ":3000/attendance",
          { cookie: this.$store.getters.cookie, time: time, login: this.$store.getters.login}
        )
        .then(() => {
          this.$store.commit('setRegistered', true)
          this.$store.commit('setTime', time)
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>