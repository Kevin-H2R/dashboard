<template>
  <v-card  width="400">
    <v-card-title>WOD</v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-container v-if="loading">
        <v-progress-circular color="primary" indeterminate/>
      </v-container>
      <v-container v-else>
        <h2 class="mb-5 text-decoration-underline">{{ title }}</h2>
        <div v-html="description"/>
      </v-container>
    </v-card-text>
  </v-card>
</template>
<script>
import axios from "axios";
export default {
  name: "wod-container",
  created() {
    const that = this
    axios.get("http://" + process.env.VUE_APP_HOST + ":3000/crossfit")
      .then(function (response) {
        that.title = response.data.title
        that.description = response.data.description
        that.loading = false
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  data() {
    return {
      loading: true,
      title: "",
      description: ""
    };
  },
};
</script>
<style lang="scss">
</style>